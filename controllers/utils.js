// SIMULE UN EVENEMENT PERSONALISE 
// PROPAGATION VERS LES PARENTS
// CAPTURE

let MyPage;

export const notifyTodosUpdate = (value = 0) => {
    if ( value != 0 ){ MyPage = value; } 

    let evt = new CustomEvent("refresh-todos", {
            detail: {
                page: value
            }
    });
    document.dispatchEvent(evt);
}