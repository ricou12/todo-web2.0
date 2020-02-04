// SIMULE UN EVENEMENT PERSONALISE 
// PROPAGATION VERS LES PARENTS
// CAPTURE

export const notifyTodosUpdate = () => {
    const evt = new CustomEvent("refresh-todos");
    document.dispatchEvent(evt);
}