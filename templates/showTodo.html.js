/* ------------------------------------------
            PAGE AFFICHER UN TODO
------------------------------------------- */
// Affiche tout le contenu du todo.
export const showTdDetail = (todo,stateCheckBox) => {
    return `
    <div class="container listTodo">
        <div class="row">
            <div class="col-12 text-center p-2 text-white mb-3">
                <h1>Consulter...</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center bg-dark p-1 listTodo_b1">
                <h4 class="p-2 showTd_date" style="color:${stateCheckBox.color};">${new Date(todo.createdAt).toLocaleString()}</h4>
            </div>
        </div>
        <div class="row border bg-light listTodo_b2">
                <div class="col-12 d-flex align-items-center bg-white border rounded p-3">
                    <h4 class="mx-2 showTdDetail_title">${todo.title}</h4>
                </div>
                <div class="col-12 d-flex align-items-center p-3">
                    <textarea rows="10" cols="1" class="border-0 w-100 bg-white text-dark" disabled >${todo.content}</textarea>
                </div>
        </div>
        <div class="row">
            <div class="col-12 d-flex justify-content-end align-items-center mt-2">
                <a href="#" class="btn btn-secondary btnHome float-right">Retour</a>
            </div> 
        </div>
    </div>`
    // <textarea rows="10" cols="1" class="w-100 bg-white text-dark" disabled>${todo.content}</textarea>
    // ${todo.content}
}