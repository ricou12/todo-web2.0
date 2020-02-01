import {getListTodo} from './listTodosController.js';
import {ShowTodo} from './showTodoController.js';
import {addedTodo} from './addedTodoController.js';
import {changeTodo,ShowChangeTodo} from './changedTodoController.js';
import {deleteTodo} from './deleteTodoController.js';
import {changedChecked} from './changedCheckedController.js';



// conteneur principal de la page html
const $todos = document.querySelector('.todos');

/* ----------------------------------------------------
  ECOUTE L'EVENT BUTTON DU MODAL AJOUTER
----------------------------------------------------- */
document.querySelector('.addedTodoSave').addEventListener('click',() => {
    addedTodo();
});
/* ----------------------------------------------------
  ECOUTE LES EVENEMENTS A PARTIR DE LA BALISE PARENT
----------------------------------------------------- */
$todos.addEventListener('click', (event) => {
    // Récupère l'élément qui recoit le focus
    const element = event.target;

    // CHECK UN ELEMENT
    if (element.classList.contains('listTodo_done')) {
        if (element.hasAttribute('data-id')) {
            const id = element.getAttribute('data-id');
            const checkedBox = element.checked;
            changedChecked(id,checkedBox);
        }
    }

    // DELETE
    if (element.classList.contains('listTodo_trash')) {
        if (element.hasAttribute('data-id')) {
            const id = element.getAttribute('data-id');
            deleteTodo(id);
        }
    }

    // PAGE AFFICHER LE TODO
    if (element.classList.contains('listTodo_title')) {
        if (element.hasAttribute('data-id')) {
            const id = element.getAttribute('data-id');
            ShowTodo(id,$todos);
        }
    }

    // PAGE AFFICHER POUR MODIFIER LE TODO
    if (element.classList.contains('listTodo_edit')) {
        if (element.hasAttribute('data-id')) {
            const id = element.getAttribute('data-id');
            ShowChangeTodo(id,$todos);
        }
    }

    // MODIFIER LE TODO 
    if (element.classList.contains('modifier_btn')) {
        if (element.hasAttribute('data-id')) {
            const id = element.getAttribute('data-id');
            changeTodo(id);
        }
    }

    // RETOUR PAGE LIST DES TODOS
    if (element.classList.contains('btnHome')) {
        getListTodo();
    }
});



/* ------------------------------------------
            CHARGEMENT DE LA PAGE
------------------------------------------- */
getListTodo();