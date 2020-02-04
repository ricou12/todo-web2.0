import {requestTodo} from './serviceControleur.js'
import {stateCheckBox} from './isCkeckedController.js'
import * as listTodos from '../templates/listTodos.html.js';
import {addedPagination} from '../templates/pagination.html.js';

let nbrPerPage = 2;

/* -------------------------------------------------
            AFFICHER LA LISTE DES TODOS 
------------------------------------------------- */
const NumberPage = (data) => {
    const nbrePage = data.count / nbrPerPage ;
    console.log(Math.ceil(nbrePage));
    return Math.ceil(nbrePage);
}

export const getPage =() => {
    return requestTodo("count").then(data => {
        const pagination = addedPagination(NumberPage(data), "http://localhost:3000/api/v1/todos/count/");
        return pagination;
    });
}

export const getListTodo = () => {
    return getPage().then(data => {
        return requestTodo().then(dataTodos => {
                // Tri le tableau avant de creer le html.
                const sortDataTodos = dataTodos.sort((a, b) => a.createdAt + b.createdAt);
                return listTodos.pageTitle() + sortDataTodos.map(todo => listTodos.showTodo(todo,stateCheckBox(todo.done))).join(""); 
            }); 
    }); 
}
// const offset = nbrePage
//`?limit={$nbrPerPage}&offset=${offset}`