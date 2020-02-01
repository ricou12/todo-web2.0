/* -----------------------------------------------
        PAGE AFFICHER POUR MODIFIER LE TODO
------------------------------------------------ */
export const modifier = (todo,stateCheckBox) => {
    return `
    <div class="row">
        <div class="col-12 text-center p-2 text-secondary rounded mb-3">
            <h1>Modifier une note</h1>
        </div>
        <div class="col-12">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center bg-dark text-white border rounded ">
                    <input type="checkbox" class="modifier_done" ${stateCheckBox}>
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
