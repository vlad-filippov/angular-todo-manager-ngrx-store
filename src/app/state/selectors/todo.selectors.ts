import { createSelector } from '@ngrx/store';
import { RootState } from '../reducers';
import * as fromReducer from '../reducers/todo.reducer';

export const getTodoState = (state: RootState) =>
  state.todo;

export const Loader = createSelector(
  getTodoState,
  (state: fromReducer.TodoStateModel) => state.loading
);

export const todoList = createSelector(
  getTodoState,
  (state: fromReducer.TodoStateModel) => state.todoList
);
