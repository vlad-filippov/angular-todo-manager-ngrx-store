import { TodoModel } from '../../todo.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as fromActions from '../actions/todo.actions';

export interface TodoStateModel {
  todoList: TodoModel[];
  loading: boolean;
}

export const initialState: TodoStateModel = {
  todoList: null,
  loading: false,
};

const todoReducer = createReducer(
  initialState,
  on(
    fromActions.getTodos,
    fromActions.addTodo,
    fromActions.removeTodo,
    fromActions.changeTodoStatus,
    (state) => ({
      ...state,
      loading: true,
    }),
  ),
  on(
    fromActions.getTodosSuccess,
    (state, { payload }) => ({
      ...state,
      loading: false,
      todoList: payload,
    }),
  ),
  on(
    fromActions.addTodoSuccess,
    fromActions.removeTodoSuccess,
    fromActions.changeTodoStatusSuccess,
    fromActions.getTodosFail,
    fromActions.addTodoFail,
    fromActions.removeTodoFail,
    fromActions.changeTodoStatusFail,
    (state) => ({
      ...state,
      loading: false,
    }),
  ),
);

export function reducer(
  state: TodoStateModel|undefined,
  action: Action,
) {
  return todoReducer(state, action);
}
