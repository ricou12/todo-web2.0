import {ChangedOrAdded} from './serviceControleur.js';
import {getListTodo} from './listTodosController.js';


export const changedChecked = (id,$state) => {
const data = {
    "done": $state
}
ChangedOrAdded(`http://localhost:3000/api/v1/todos/${id}`, "PATCH", data).then(returnData => {
    if (returnData) {
        getListTodo();
    }
});
}
