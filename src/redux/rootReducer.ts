import {combineReducers} from 'redux';
import todoReducer from './todos/todoReducer';

const reducers = combineReducers({
    todos: todoReducer
});

export type RootState = ReturnType<typeof reducers>
export default reducers;