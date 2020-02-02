import {requestTodo} from './serviceControleur.js';
import {ChangedOrAdded} from './serviceControleur.js';
import {getListTodo} from './listTodosController.js';
import {stateCheckBox} from './isCkeckedController.js';
import {messageBox} from '../templates/messageBox.html.js';
import {modifier} from '../templates/changeTodo.html.js';

/* ----------------------------------------------------------
    ENREGISTRE LES MODIFICATIONS DU TODO DANS LA DATABASE
---------------------------------------------------------- */

// Affichage de la page.
export const ShowChangeTodo = (id,$component) => {
    requestTodo(`http://localhost:3000/api/v1/todos/${id}`).then(dataTodo => {
        $component.innerHTML = modifier(dataTodo,stateCheckBox(dataTodo.done));
    });
}

// Enregistre les modifications.
export const changeTodo = (id) => {
    const title = document.querySelector('.modifier_title').value;
    const content = document.querySelector('.modifier_content').value;
    const checkedBox = document.querySelector('.modifier_done');
    const data = {
        "title": title,
        "content": content,
        "done": checkedBox.checked
    }
    ChangedOrAdded(`http://localhost:3000/api/v1/todos/${id}`, "PATCH", data).then(dataTodo => {
        getListTodo();
        messageBox("Modification", "Les modifications ont été prise en compte !");
        $('.toast').toast('show');
    });
}

// Change la couleur de la date si je modifie l'état du checkbox.
export const isCheckedChangeColor = (element) => {
    const modifier_date = document.querySelector('.modifier_date');
    if(element.checked == true){
        modifier_date.style.color = "gray";
    } else {
        modifier_date.style.color = "white";
    }  
}