import {ChangedOrAdded} from './serviceControleur.js';
import { notifyTodosUpdate } from './utils.js';

/* ------------------------------------------------------------------
    ACTUALISE DANS LA DATABASE LE CHANGEMENT D'ETAT DU CHECKBOX
------------------------------------------------------------------ */
export const changedChecked = (id,$state,idPage) => {
const data = {
    "done": $state
}
ChangedOrAdded(id, "PATCH", data).then(returnData => {
    if (returnData) {
        notifyTodosUpdate(idPage);
    }
});
}
