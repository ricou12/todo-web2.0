import {ChangedOrAdded} from './serviceControleur.js';
import {getListTodo} from './listTodosController.js';
import {messageBox} from '../templates/messageBox.html.js';


/* ----------------------------------------------------
                    AJOUTER UN TODO
----------------------------------------------------- */
export const addedTodo = () => {
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
        ChangedOrAdded("http://localhost:3000/api/v1/todos", "POST", data).then(data => {
            title.value = "";
            content.value = "";
            messageBox("Edition","Votre note a été prise en compte !");
            $('.toast').toast('show');
            getListTodo();
        });
    }
}