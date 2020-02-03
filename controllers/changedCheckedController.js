import {ChangedOrAdded} from './serviceControleur.js';
import {getListTodo} from './listTodosController.js';

/* ------------------------------------------------------------------
    ACTUALISE DANS LA DATABASE LE CHANGEMENT D'ETAT DU CHECKBOX
------------------------------------------------------------------ */
export const changedChecked = (id,$state) => {
const data = {
    "done": $state
}
ChangedOrAdded(id, "PATCH", data).then(returnData => {
    if (returnData) {
        getListTodo();
    }
});
}
