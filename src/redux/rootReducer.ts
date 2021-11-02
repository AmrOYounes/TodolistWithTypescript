import {combineReducers} from 'redux';
import todoReducer from './todos/todoReducer';
import userReducer from './user/userReducer';

const reducers = combineReducers({
    todos: todoReducer,
    user: userReducer
});

export type RootState = ReturnType<typeof reducers>
export default reducers;