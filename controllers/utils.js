// CRRER UN EVENEMENT PERSONALISE

export const notifyTodosUpdate = () => {
    const evt = new CustomEvent("refresh-todos");
    document.dispatchEvent(evt);
}