/* ------------------------------------------
            PAGE AFFICHER UN TODO
------------------------------------------- */
// Affiche tout le contenu du todo.
export const showTdDetail = (todo,stateCheckBox) => {
    return `
        <div class="row">
            <div class="col-12 text-center p-2 text-secondary rounded mb-3">
                <h1>Consulter...</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center bg-dark text-white border rounded ">
                <input type="checkbox" class="showTdDetail_done"  ${stateCheckBox}>
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