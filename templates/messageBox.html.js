/* ----------------------------------------------------
                    MESSAGE UTILISATEUR
----------------------------------------------------- */
export const messageBox = (title, info) => {
    document.querySelector('.message').innerHTML = `
    <div class="toast" role="alert" aria-live="assertive" data-delay="5000" aria-atomic="true" style="">
        <div class="toast-header bg-danger text-white">
            <img src="..." class="rounded mr-2" alt="...">
            <strong class="mr-auto">${title}</strong>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="toast-body bg-dark text-white">
            ${info}
        </div>
    </div>`
}