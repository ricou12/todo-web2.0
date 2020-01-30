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


    // DELETE
    if (element.classList.contains('listTodo_trash')) {
        if (element.hasAttribute('data-id')) {
            const id = element.getAttribute('data-id');
            deleteTodo(id).then(returnData => {
                if (returnData) {
                    getListTodo();
                    console.log('Suppression réussie');
                } else {
                    console.log('Impossible de supprimer');
                }
            });
        }
    }

    // GET Affiche le todo 
    if (element.classList.contains('listTodo_title')) {
        if (element.hasAttribute('data-id')) {
            const id = element.getAttribute('data-id');
            getTodo(id);
        }
    }

    // PATCH
        if (element.classList.contains('listTodo')) {
            if (element.hasAttribute('data-id')) {
                const id = element.getAttribute('data-id');
                changeTodo(id);
            }
        }
});


/* ------------------------------------------
  RECUPERE LA LISTE DES TODOS ET AFFICHE 
------------------------------------------- */
const getListTodo = () => {
    fetch("http://localhost:3000/api/v1/todos")
        .then(res => res.json())
        .then(dataTodos => {
            console.log(dataTodos);
            $todos.innerHTML = dataTodos.map(todo => showTodo(todo)).join("");
        });
}

const showTodo = (todo) => {
    return `
        <div class="row listTodo border">
            <div class="col-12 col-lg-5 d-flex flex-nowrap align-items-center p-2">
                <div class="d-flex">
                    <input type="checkbox" class="listTodo_done">
                    <h4 class="p-2 listTodo_Date">${new Date(todo.createdAt).toLocaleString()}</h4>
                </div>
                <a href="#"><h4 class="listTodo_title" data-id="${todo.id}">${todo.title}</h4></a>
            </div>
            <div class="col-12 col-lg-7 d-flex flex-nowrap justify-content-between align-items-center p-2">
                <h5 class="listTodo_content">${todo.content}</h5>
                 <a href="#"><img class="border border-danger rounded listTodo_trash" src="./img/trash.png" alt="trash" data-id="${todo.id}" width="50"></a>
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
    const data = {
        "title": title.value,
        "content": content.value
    };
    added(data).then(data => {
        // getListTodo();
        // Ajout le nouveau todo à la liste
        $todos.innerHTML += showTodo(data);
        // Vide les champs input.
        title.value ="";
        content.value ="";
    });

});

const added = (data) => {
    return fetch("http://localhost:3000/api/v1/todos", {
            method: "POST",
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

/* ------------------------------------------
        AFFICHER ET MODIFIER UN TODO
------------------------------------------- */
// afficher un todo
const getTodo = (id) => {
    fetch(`http://localhost:3000/api/v1/todos/${id}`)
        .then(res => res.json())
        .then(dataTodo => {
            console.log(dataTodo);
            $todos.innerHTML = showTodoDetail(dataTodo);
        });
}
// Affiche tout le contenu du todo.
const showTodoDetail = (todo) => {
    return `
    <div class="container border bg-light">
        <div class="row changeTodo">
                <div class="col-12 d-flex align-items-center">
                    <input type="checkbox" class="showTodoDetail_done">
                    <h4 class="p-2 listTodo_Date">${new Date(todo.createdAt).toLocaleString()}</h4>
                    <h4 type="text" class="mx-2 showTodoDetail_title">${todo.title}</h4>
                </div>
                <div class="col-12 d-flex align-items-center">
                    <input type="text" class="mx-2 showTodoDetail_content" value="${todo.content}">
                    <a href="#" class="btn btn-primary showTodoDetail_btnChange float-right">Retour</a>
                </div>   
        </div>
    <div>`
}

// Affiche tout le contenu du todo.
const changeTodo = (todo) => {
    return `
    <div class="container border">
        <div class="row changeTodo">
            <div class="col-12 d-flex flex-wrap justify-content-around align-items-center">
                <div class="d-flex">
                    <input type="checkbox" class="changeTodo_done">
                    <input type="text" class="mx-2 changeTodo_title" value="${todo.title}">
                    <input type="text" class="mx-2 changeTodo_content" value="${todo.content}">
                </div>
                <div class="d-flex">
                    <a href="#" class="btn btn-primary changeTodo_btnChange float-right" data-id="${todo.id}">Modifier</a>
                </div>   
            </div>
        </div>
    <div>`
}

/* ------------------------------------------
                DELETE UN TODO
------------------------------------------- */
const deleteTodo = (id) => {
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

/* ------------------------------------------
            CHARGEMENT DE LA PAGE
------------------------------------------- */
getListTodo();