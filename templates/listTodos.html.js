export const pageTitle = () => {
    return `<div class="col-12 text-center p-2 text-white rounded mb-3">
        <h1>Toutes les notes</h1>
    </div>`;
}
    
export const showTodo = (todo,stateCheckBox) => {
    return `
    <div class="row listTodo m-2">
        <div class="col-12">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4 d-flex flex-nowrap justify-content-center align-items-center bg-dark p-1 listTodo_b1">
                    <input type="checkbox" class="listTodo_b1_done ml-3" data-id="${todo.id}" ${stateCheckBox.etat}>
                    <h5 class="p-2 listTodo_b1_Date" style="color:${stateCheckBox.color};">${new Date(todo.createdAt).toLocaleString()}</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-12 d-flex flex-nowrap justify-content-between align-items-center p-2 listTodo_b2">
                    <a href="#"><h5 class="listTodo_b2_title" data-id="${todo.id}">${todo.title}</h5></a>
                    <div class="d-flex flex-nowrap justify-content-between listTodo_b2_icon">
                        <a href="#"><img class="listTodo_b2_edit" src="./img/edit.svg" alt="editer" data-id="${todo.id}" width="40"></a> 
                        <a href="#"><img class="listTodo_b2_trash" src="./img/trash.png" alt="trash" data-id="${todo.id}" width="40"></a>  
                    </div>
                </div>
            </div>
        </div>
    </div> `;
}

/* <div class="row">
<div class="col-12 offset-md-8 col-md-4 d-flex flex-nowrap justify-content-between align-items-center p-1 border-bottom rounded ">
    <a href="#"><img class="listTodo_edit" src="./img/edit.svg" alt="editer" data-id="${todo.id}" width="50"></a>
    <a href="#"><img class="listTodo_trash" src="./img/trash.png" alt="trash" data-id="${todo.id}" width="50"></a>  
</div>
</div> */