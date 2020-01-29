const $todos = document.querySelector('.todos');

/* ----------------------------------------------------
  ECOUTE LES EVENEMENTS A PARTIR DE LA BALISE PARENT
----------------------------------------------------- */
$todos.addEventListener('click', (event) => {
    // Récupère l'élément qui recoit le focus
    const element = event.target;
  
    const $listTodo = document.querySelector('.listTodo');
    if ($listTodo.hasAttribute('data-id')){
        const id = $listTodo.getAttribute('data-id');
        if (element.classList.contains('listTodo_title')) {
            getTodo(id);
        }
        // Si on veut modifier
        if (element.classList.contains('listTodo')) {
            changeTodo(id);
        }
        // si l'on souhaite supprimer
        if (element.classList.contains('listTodo_trash')) {
            deleteTodo(id);
        }
    }
});

/* ------------------------------------------
  AFFICHER ET MODIFIER UN TODO
------------------------------------------- */
// afficher un todo
const getTodo = (id) => {
    fetch("http://localhost:3000/api/v1/todos/1")
        .then(res => res.json())
        .then(dataTodo => {
            console.log(dataTodo);
            $todos.innerHTML = changeTodo(dataTodo);
        });
}

// Modifier le todo.
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
                    <a href="#" class="btn btn-primary changeTodo_btnChange float-right"  data-id="${todo.id}">Modifier</a>
                </div>   
            </div>
        </div>
    <div>`
}

/* ------------------------------------------
  RECUPERE LA LISTE DES TODOS ET AFFICHE 
------------------------------------------- */
const getListTodo = () => {
    fetch("http://localhost:3000/api/v1/todos")
    .then(res => res.json())
    .then(dataTodos => {
        console.log(dataTodos);
        $todos.innerHTML = dataTodos.map(todo => generateTodo(todo)).join("") ;
    });
}

const generateTodo = (todo) => {
    return `
    <div class="container border">
        <div class="row listTodo" data-id="${todo.id}">
            <div class="col-12 col-lg-5 d-flex flex-nowrap align-items-center p-2">
                <div class="d-flex">
                    <input type="checkbox" class="listTodo_done">
                    <h4 class="p-2 listTodo_Date">${todo.createdAt}</h4>
                </div>
                <a href="#"><h4 class="listTodo_title">${todo.title}</h4></a>
            </div>
            <div class="col-12 col-lg-7 d-flex flex-nowrap justify-content-between align-items-center p-2">
                <h5 class="listTodo_content">${todo.content}</h5>
                 <a href="#"><img class="border border-danger rounded listTodo_trash" src="./img/trash.png" alt="trash" data-id="${todo.id}" width="50"></a>
            </div>
        </div>
   <div>
   `   
}



getListTodo();


