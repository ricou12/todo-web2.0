import {requestTodo} from './serviceControleur.js'
import {stateCheckBox} from './isCkeckedController.js'
import * as listTodos from '../templates/listTodos.html.js';
import {addedPagination} from '../templates/pagination.html.js';

let nbrPerPage = 10;

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
        const nbrePage = NumberPage(data);
        const pagination = addedPagination(nbrePage, "http://localhost:3000/api/v1/todos/count/");
        return [nbrePage,pagination];
    });
}

export const getListTodo = (page = 1) => {
    return getPage().then(data => {
        const offset = (page.page * nbrPerPage) - nbrPerPage;

        return requestTodo(`?limit=${nbrPerPage}&offset=${offset}`).then(dataTodos => {
                // Tri le tableau avant de creer le html.
                // const sortDataTodos = dataTodos.sort((a, b) => a.createdAt + b.createdAt);
                return listTodos.pageTitle() + dataTodos.map(todo => listTodos.showTodo(todo, stateCheckBox(todo.done))).join("") + data[1];
            }); 
    }); 
}
// const offset = nbrePage
// `?limit=${nbrPerPage}&offset=${offset}`