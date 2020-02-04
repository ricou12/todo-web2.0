import {requestTodo} from './serviceControleur.js'
import {stateCheckBox} from './isCkeckedController.js'
import * as listTodos from '../templates/listTodos.html.js';
import {addedPagination} from '../templates/pagination.html.js';

let nbrPerPage = 2;
let nbrePage = 0;
/* -------------------------------------------------
            AFFICHER LA LISTE DES TODOS 
------------------------------------------------- */
export const getPage =() => {
    return requestTodo("count").then(data => {
        nbrePage = data.count / nbrPerPage ;
        console.log(Math.ceil(nbrePage));
        const test = addedPagination(Math.ceil(nbrePage), "http://localhost:3000/api/v1/todos/count/");
        console.log(test);
    });
}

export const getListTodo = (url) => {
    getPage();
    return requestTodo("").then(dataTodos => {
        // Tri le tableau avant de creer le html.
        const sortDataTodos = dataTodos.sort((a, b) => a.createdAt + b.createdAt);
        return listTodos.pageTitle() + sortDataTodos.map(todo => listTodos.showTodo(todo,stateCheckBox(todo.done))).join(""); 
    }); 
}
