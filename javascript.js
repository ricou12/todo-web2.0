// conteneur principal de la page html
const $todos = document.querySelector('.todos');
// bouton validation ajout todo
const $addedTodo = document.querySelector('.addedTodoSave');

/* ----------------------------------------------------
  ECOUTE LES EVENEMENTS A PARTIR DE LA BALISE PARENT
----------------------------------------------------- */
$todos.addEventListener('click', (event) => {
    // Récupère l'élément qui recoit le focus
    const element = event.target;

    // CHECK UN ELEMENT
    if (element.classList.contains('listTodo_done')) {
        if (element.hasAttribute('data-id')) {
            const id = element.getAttribute('data-id');
            const checkedBox = element.checked;
            data = {
                "done": checkedBox
            }
            ChangedOrAdded(`http://localhost:3000/api/v1/todos/${id}`, "PATCH", data).then(returnData => {
                if (returnData) {
                    getListTodo();
                }
            });
        }
    }

    // DELETE
    if (element.classList.contains('listTodo_trash')) {
        if (element.hasAttribute('data-id')) {
            const id = element.getAttribute('data-id');
            resquestDelete(id).then(returnData => {
                if (returnData) {
                    getListTodo();
                    messageBox("Suppression","La note a été supprimée !")
                } else {
                    messageBox("Suppression","Impossible de supprimer la note!")
                }
                $('.toast').toast('show');
            });
        }
    }

    // PAGE AFFICHER LE TODO
    if (element.classList.contains('listTodo_title')) {
        if (element.hasAttribute('data-id')) {
            const id = element.getAttribute('data-id');
            requestTodo(`http://localhost:3000/api/v1/todos/${id}`).then(dataTodo => {
                // console.log(dataTodo);
                $todos.innerHTML = showTdDetail(dataTodo);
            });
        }
    }

    // PAGE AFFICHER POUR MODIFIER LE TODO
    if (element.classList.contains('listTodo_edit')) {
        if (element.hasAttribute('data-id')) {
            const id = element.getAttribute('data-id');
            requestTodo(`http://localhost:3000/api/v1/todos/${id}`).then(dataTodo => {
                // console.log(dataTodo);
                $todos.innerHTML = modifier(dataTodo);
            });
        }
    }

    // MODIFIER LE TODO 
    if (element.classList.contains('modifier_btn')) {
        if (element.hasAttribute('data-id')) {
            const title = document.querySelector('.modifier_title').value;
            const content = document.querySelector('.modifier_content').value;
            const checkedBox = document.querySelector('.modifier_done').hasAttribute('checked');
            data = {
                "title": title,
                "content": content,
                "done": checkedBox
            }
            const id = element.getAttribute('data-id');
            ChangedOrAdded(`http://localhost:3000/api/v1/todos/${id}`, "PATCH", data).then(dataTodo => {
                // console.log(dataTodo);
                getListTodo();
                messageBox("Modification","Les modifications ont été prise en compte !")
                $('.toast').toast('show');
            });
        }
    }

    // RETOUR PAGE LIST DES TODOS
    if (element.classList.contains('btnHome')) {
        getListTodo();
    }
});

/* ------------------------------------------
            REQUETES ASYNCHRONES
------------------------------------------- */
const requestTodo = (url) => {
    return fetch(url)
        .then(res => res.json())
        .then(dataTodo => {
            return dataTodo;
        });
}

// AJOUTER OU MODIFIER
const ChangedOrAdded = (url, verbe, data) => {
    return fetch(url, {
            method: verbe,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(returnData => {
            return returnData;
        })
        .catch((error) => {
            console.log(error.message);
        });
}

// MODIFIER OU SUPPRIMER
const resquestDelete = (id) => {
    return fetch(`http://localhost:3000/api/v1/todos/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(returnData => {
            return returnData;
        })
        .catch((error) => {
            console.log(error.message);
        });
}



/* -------------------------------------------------
    AFFICHER LA LISTE DES TODOS ET AFFICHE 
------------------------------------------------- */
const getListTodo = () => {
    requestTodo("http://localhost:3000/api/v1/todos").then(dataTodos => {
        console.log(dataTodos);
        $todos.innerHTML = dataTodos.map(todo => showTodo(todo)).join("");
    });
}

const showTodo = (todo) => {
    return `
        <div class="row listTodo m-2">
            <div class="col-12">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4 d-flex flex-nowrap justify-content-center align-items-center border rounded bg-dark text-white p-1">
                        <input type="checkbox" class="listTodo_done" data-id="${todo.id}" ${stateCheckBox(todo.done)}>
                        <h4 class="p-2 listTodo_Date">${new Date(todo.createdAt).toLocaleString()}</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 d-flex flex-nowrap align-items-center border p-2 bg-light">
                        <a href="#"><h4 class="listTodo_title" data-id="${todo.id}">${todo.title}</h4></a>  
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 offset-md-8 col-md-4 d-flex flex-nowrap justify-content-between align-items-center p-1 border-bottom rounded ">
                        <a href="#"><img class="listTodo_edit" src="./img/edit.svg" alt="editer" data-id="${todo.id}" width="50"></a>
                        <a href="#"><img class="listTodo_trash" src="./img/trash.png" alt="trash" data-id="${todo.id}" width="50"></a>  
                    </div>
                </div>
            </div>
        </div> `
}

/* ------------------------------------------
            PAGE AFFICHER UN TODO
------------------------------------------- */
// Affiche tout le contenu du todo.
const showTdDetail = (todo) => {
    return `
        <div class="row">
            <div class="col-12 text-center p-2 bg-secondary text-white rounded mb-3">
                <h1>Consulter...</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center bg-dark text-white border rounded ">
                <input type="checkbox" class="showTdDetail_done" ${stateCheckBox(todo.done)}>
                <h4 class="p-2 showTd_date">${new Date(todo.createdAt).toLocaleString()}</h4>
            </div>
        </div>
        <div class="row border bg-light rounded">
                <div class="col-12 d-flex align-items-center bg-white border rounded p-3">
                    <h4 class="mx-2 showTdDetail_title">${todo.title}</h4>
                </div>
                <div class="col-12 d-flex align-items-center p-3">
                    ${todo.content}
                </div>
        </div>
        <div class="row">
            <div class="col-12 d-flex justify-content-end align-items-center mt-2">
                <a href="#" class="btn btn-secondary btnHome float-right">Retour</a>
            </div> 
        </div>`
    // <textarea rows="10" cols="1" class="w-100 bg-white text-dark" disabled>${todo.content}</textarea>
}

/* -----------------------------------------------
        PAGE AFFICHER POUR MODIFIER LE TODO
------------------------------------------------ */
const modifier = (todo) => {
    return `
    <div class="row">
        <div class="col-12 text-center p-2 bg-secondary text-white rounded mb-3">
            <h1>Modifier une note</h1>
        </div>
        <div class="col-12">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center bg-dark text-white border rounded ">
                    <input type="checkbox" class="modifier_done" ${stateCheckBox(todo.done)}>
                    <h4 class="p-2 modifier_date">${new Date(todo.createdAt).toLocaleString()}</h4>
                </div>
            </div>
            <div class="row border bg-light rounded">
                <div class="col-12 d-flex align-items-center bg-white border rounded p-3">
                    <input type="text" class="mx-2 modifier_title w-100" value="${todo.title}">
                </div>
                <div class="col-12 d-flex align-items-center p-3">
                    <textarea rows="10" cols="1" class="modifier_content w-100">${todo.content}</textarea>
                </div>
                <div class="col-12 d-flex justify-content-center align-items-center p-3">
                    <a href="#" class="btn btn-primary modifier_btn"  data-id="${todo.id}">Enregistrer</a>
                </div>
            </div>
            <div class="row">
                <div class="col-12 d-flex justify-content-end align-items-center mt-2">
                    <a href="#" class="btn btn-secondary btnHome">Retour</a>
                </div> 
            </div>
        </div>
    </div> 
   `
}

/* ----------------------------------------------------
                    AJOUTER UN TODO
----------------------------------------------------- */
$addedTodo.addEventListener('click', () => {
    const title = document.querySelector('.addedTodoTitle');
    const content = document.querySelector('.addedTodoContent');
    if (title.value === "") {
        messageBox("Edition","Vous devez saisir au moins un titre !");
        $('.toast').toast('show');
    } else {
        const data = {
            "title": title.value,
            "content": content.value
        };
        ChangedOrAdded("http://localhost:3000/api/v1/todos", "POST", data).then(data => {
            title.value = "";
            content.value = "";
            messageBox("Edition","Votre note a été prise en compte !");
            $('.toast').toast('show');
            getListTodo();
        });
    }
});

/* ----------------------------------------------------
                    MESSAGE UTILISATEUR
----------------------------------------------------- */
const messageBox = (title, info) => {
    document.querySelector('.message').innerHTML = `
    <div class="toast" role="alert" aria-live="assertive" data-delay="5000" aria-atomic="true" >
        <div class="toast-header">
            <img src="..." class="rounded mr-2" alt="...">
            <strong class="mr-auto">${title}</strong>
            <small class="text-muted">Timer: 5 s</small>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="toast-body">
            ${info}
        </div>
    </div>`
}

/* ------------------------------------------
        RENVOI L'ETAT DU CHECKBOX
------------------------------------------- */
const stateCheckBox = (state) => {
    if (state) {
        return "checked";
    } else {
        return "";
    }
}

/* ------------------------------------------
            CHARGEMENT DE LA PAGE
------------------------------------------- */
getListTodo();