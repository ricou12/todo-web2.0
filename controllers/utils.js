// SIMULE UN EVENEMENT PERSONALISE 
// PROPAGATION VERS LES PARENTS
// CAPTURE

export const notifyTodosUpdate = (value = 1) => {
    let evt = new CustomEvent("refresh-todos", {
            detail: {
                page: value
            }
    });
    document.dispatchEvent(evt);
}