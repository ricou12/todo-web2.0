const $listTodo = document.querySelector('.listTodo');


const getListTodo = () => {
    fetch("http://localhost:3000/api/v1/todos")
    .then(res => res.json())
    .then(dataTodos => {
        console.log(dataTodos);
        $listTodo.innerHTML = dataTodos.map(todo => GenerateListTodo(todo)) ;
    });
}

const GenerateListTodo = (todo) => {
    return `
    <div class="container">
        <div class="row border">
            <div class="col-12 col-lg-4 list-todo d-flex flex-nowrap justify-content-between p-2">
                <input type="checkbox" class="list-todo_done" value="${todo.done}">
                <h3 class="list-todo_Date">${todo.createAt}</h3>
                <h3 class="list-todo_title">${todo.title}Titre</h3>
                <a href="#"><img class="border border-danger rounded" src="./img/trash.png" alt="trash" data-id="${todo.id}" width="50"></a>
            </div>
            <div class="col-12 col-lg-8" >
                <h5 class="list-todo_content">${todo.content}Content</h5>
                <a href="" class="btn btn-primary">Modifier</a>
            </div>
        </div>
    </div>
   `
}

getListTodo();