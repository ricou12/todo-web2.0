import {resquestDelete} from './serviceControleur.js';
import { notifyTodosUpdate } from './utils.js';
import {messageBox} from '../templates/messageBox.html.js';

/* ----------------------------------------------------------
    SUPPRESSION D'UN TODO
---------------------------------------------------------- */
export const deleteTodo = (id,idPage) => {
    resquestDelete(id).then(returnData => {
        if (returnData) {
            notifyTodosUpdate(idPage);
            messageBox("Suppression", "La note a été supprimée !")
        } else {
            messageBox("Suppression", "Impossible de supprimer la note!")
        }
        $('.toast').toast('show');
    });
}