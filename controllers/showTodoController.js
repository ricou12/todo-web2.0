import {showTdDetail} from '../templates/showTodo.html.js';
import {requestTodo} from './serviceControleur.js'
import {stateCheckBox} from './isCkeckedController.js'

export const ShowTodo = (id) => {
    return requestTodo(id).then(dataTodo => {
        return showTdDetail(dataTodo,stateCheckBox(dataTodo.done));
    });
}