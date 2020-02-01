export const pageTitle = () => {
    return `<div class="col-12 text-center p-2 text-secondary rounded mb-3">
        <h1>Toutes les notes</h1>
    </div>`;
}
    
export const showTodo = (todo,stateCheckBox) => {
    return `
    <div class="row listTodo m-2">
        <div class="col-12">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4 d-flex flex-nowrap justify-content-center align-items-center border rounded bg-dark text-white p-1">
                    <input type="checkbox" class="listTodo_done" data-id="${todo.id}" ${stateCheckBox}>
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
    </div> `;
}

