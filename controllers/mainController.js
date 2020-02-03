import {getListTodo} from './listTodosController.js';
import {ShowTodo} from './showTodoController.js';
import {addedTodo} from './addedTodoController.js';
import {changeTodo,ShowChangeTodo,isCheckedChangeColor} from './changedTodoController.js';
import {deleteTodo} from './deleteTodoController.js';
import {changedChecked} from './changedCheckedController.js';
import { notifyTodosUpdate } from './utils.js';

// conteneur principal de la page html
const $todos = document.querySelector('.todos');

/* ----------------------------------------------------
        RECUPERE UN EVENEMENT PERSONALISE
----------------------------------------------------- */
document.addEventListener('refresh-todos', () => {
    getListTodo().then(data => {
        $todos.innerHTML = data;
    });
});

/* ----------------------------------------------------
        ECOUTE L'EVENT BUTTON DU MODAL AJOUTER
----------------------------------------------------- */
const $addedTodo = document.querySelector('.addedTodoSave');
$addedTodo.addEventListener('click', () => {
    addedTodo();
});

/* ----------------------------------------------------
  ECOUTE LES EVENEMENTS A PARTIR DE LA BALISE PARENT
----------------------------------------------------- */
$todos.addEventListener('click', (event) => {
    // Récupère l'élément qui recoit le focus
    const element = event.target;

    // SI ON CLIQUE SUR LE CHECKBOX DE LA PAGE LISTE DES TODOS
    if (element.classList.contains('listTodo_b1_done')) {
        if (element.hasAttribute('data-id')) {
            const id = element.getAttribute('data-id');
            const checkedBox = element.checked;
            changedChecked(id,checkedBox);
        }
    }

    // SI ON CLIQUE SUR LE CHECKBOX DE LA PAGE MODIFIER LE TODO 
    if (element.classList.contains('modifier_done')) {
        isCheckedChangeColor(element);
    }

    // DELETE
    if (element.classList.contains('listTodo_b2_trash')) {
        if (element.hasAttribute('data-id')) {
            const id = element.getAttribute('data-id');
            deleteTodo(id);
        }
    }

    // PAGE AFFICHER LE TODO
    if (element.classList.contains('listTodo_b2_title')) {
        if (element.hasAttribute('data-id')) {
            const id = element.getAttribute('data-id');
            ShowTodo(id).then( data => {
                $todos.innerHTML = data;
            });
        }
    }

    // PAGE AFFICHER POUR MODIFIER LE TODO
    if (element.classList.contains('listTodo_b2_edit')) {
        if (element.hasAttribute('data-id')) {
            const id = element.getAttribute('data-id');
            ShowChangeTodo(id).then(data => {
                $todos.innerHTML = data;
            });
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
        notifyTodosUpdate();
    }

    // if (element.classList.contains('btnBold')){
    //     var selObj = document.getSelection(); 
    //     alert(selObj);
    //     var selRange = selObj.getRangeAt(0);
    //     // travailler avec la sélection
    // }

});
 

/* ------------------------------------------
            CHARGEMENT DE LA PAGE
------------------------------------------- */
notifyTodosUpdate();