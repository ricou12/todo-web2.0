import {requestTodo} from './serviceControleur.js'
import {stateCheckBox} from './isCkeckedController.js'
import * as listTodos from '../templates/listTodos.html.js';

let nbrPerPage = 2;
let nbrePage = 0;
/* -------------------------------------------------
            AFFICHER LA LISTE DES TODOS 
------------------------------------------------- */
export const getPage =() => {
    requestTodo("count").then(data => {
        nbrePage = data.count/nbrPerPage;
        console.log(nbrePage);
    });
}

export const getListTodo = () => {
    // getPage();
    return requestTodo("").then(dataTodos => {
        // Tri le tableau avant de creer le html.
        const sortDataTodos = dataTodos.sort((a, b) => a.createdAt + b.createdAt);
        return listTodos.pageTitle() + sortDataTodos.map(todo => listTodos.showTodo(todo,stateCheckBox(todo.done))).join(""); 
    }); 
}
