import {showTdDetail} from '../templates/showTodo.html.js';
import {requestTodo} from './serviceControleur.js'
import {stateCheckBox} from './isCkeckedController.js'

export const ShowTodo = (id) => {
    return requestTodo(`http://localhost:3000/api/v1/todos/${id}`).then(dataTodo => {
        return showTdDetail(dataTodo,stateCheckBox(dataTodo.done));
    });
}