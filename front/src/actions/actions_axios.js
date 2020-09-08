import axios from 'axios';
import {
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
    ADD_TODO_STARTED,
    DELETE_TODO
} from '../reduscers/types';



export const addTodo = () => {
    return dispatch => {
        const title='';
        const userId='';
        dispatch(addTodoStarted());
        axios
            .post(`http://127.0.0.1:8000/`, {
                completed: false
            })
            .then(res => {
                dispatch(addTodoSuccess(res.data));
            })
            .catch(err => {
                dispatch(addTodoFailure(err.message));
            });
    };
};

const addTodoSuccess = todo => ({
    type: ADD_TODO_SUCCESS,
    payload: {
        ...todo
    }
});

const addTodoStarted = () => ({
    type: ADD_TODO_STARTED
});

const addTodoFailure = error => ({
    type: ADD_TODO_FAILURE,
    payload: {
        error
    }
});
