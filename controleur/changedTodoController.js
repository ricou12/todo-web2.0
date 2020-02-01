import {requestTodo} from './serviceControleur.js';
import {ChangedOrAdded} from './serviceControleur.js';
import {getListTodo} from './listTodosController.js';
import {stateCheckBox} from './isCkeckedController.js';
import {messageBox} from '../templates/messageBox.html.js';
import {modifier} from '../templates/changeTodo.html.js';


export const ShowChangeTodo = (id,$component) => {
    requestTodo(`http://localhost:3000/api/v1/todos/${id}`).then(dataTodo => {
        $component.innerHTML = modifier(dataTodo,stateCheckBox(dataTodo.done));
    });
}


export const changeTodo = (id) => {
    const title = document.querySelector('.modifier_title').value;
    const content = document.querySelector('.modifier_content').value;
    const checkedBox = document.querySelector('.modifier_done').hasAttribute('checked');
    const data = {
        "title": title,
        "content": content,
        "done": checkedBox
    }
    ChangedOrAdded(`http://localhost:3000/api/v1/todos/${id}`, "PATCH", data).then(dataTodo => {
        getListTodo();
        messageBox("Modification", "Les modifications ont été prise en compte !");
        $('.toast').toast('show');
    });
}