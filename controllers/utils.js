// SIMULE UN EVENEMENT PERSONALISE 
// PROPAGATION VERS LES PARENTS
// CAPTURE

export const notifyTodosUpdate = (value) => {

    let evt = new CustomEvent("refresh-todos", {
        detail: {
            page: value
        }
    });

    document.dispatchEvent(evt);
}