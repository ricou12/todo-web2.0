import {requestTodo} from './serviceControleur.js'
import {stateCheckBox} from './isCkeckedController.js'
import * as listTodos from '../templates/listTodos.html.js';


/* -------------------------------------------------
            AFFICHER LA LISTE DES TODOS 
------------------------------------------------- */
// conteneur principal de la page html
const $todos = document.querySelector('.todos');

export const getListTodo = () => {
    requestTodo("").then(dataTodos => {
        // Tri le tableau avant de creer le html.
        const sortDataTodos = dataTodos.sort((a, b) => a.createdAt + b.createdAt);
        $todos.innerHTML = listTodos.pageTitle() + sortDataTodos.map(todo => listTodos.showTodo(todo,stateCheckBox(todo.done))).join(""); 
    }); 
}
