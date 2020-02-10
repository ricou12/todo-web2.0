import {ChangedOrAdded} from './serviceControleur.js';
import {messageBox} from '../templates/messageBox.html.js';
import { notifyTodosUpdate } from './utils.js';


/* ----------------------------------------------------
                    AJOUTER UN TODO
----------------------------------------------------- */
export const addedTodo = (idPage) => {
    const title = document.querySelector('.addedTodoTitle');
    const content = document.querySelector('.addedTodoContent');
    if (title.value === "") {
        messageBox("Edition","Vous devez saisir au moins un titre !");
        $('.toast').toast('show');
    } else {
        const data = {
            "title": title.value,
            "content": content.value
        };
        ChangedOrAdded("", "POST", data).then(data => {
            title.value = "";
            content.value = "";
            messageBox("Edition","Votre note a été prise en compte !");
            $('.toast').toast('show');
            notifyTodosUpdate(idPage);
        });
    }
}