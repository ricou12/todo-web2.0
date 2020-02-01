import {requestTodo} from './serviceControleur.js'
import {stateCheckBox} from './isCkeckedController.js'
import * as listTodos from '../templates/listTodos.html.js';


/* -------------------------------------------------
    AFFICHER LA LISTE DES TODOS ET AFFICHE 
------------------------------------------------- */
// conteneur principal de la page html
const $todos = document.querySelector('.todos');
export const getListTodo = () => {
    requestTodo("http://localhost:3000/api/v1/todos").then(dataTodos => {
        $todos.innerHTML = listTodos.pageTitle() + dataTodos.map(todo => listTodos.showTodo(todo,stateCheckBox(todo.done))).join(""); 
    }); 
}
