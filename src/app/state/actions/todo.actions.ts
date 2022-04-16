import { createAction, props } from '@ngrx/store';
import { TodoModel } from '../../todo.model';

// ============================== LOAD TODOS ==============================
export const getTodos = createAction(
  '[TodoState] Get all todos',
  props<TodoModel>(),
);
export const getTodosSuccess = createAction(
  '[TodoState] Get all todos success',
  props<{ payload: TodoModel[] }>(),
);
export const getTodosFail = createAction(
  '[TodoState] Get all todos fail',
  props<{ message: string }>(),
);

// ============================== ADD TODO ==============================
export const addTodo = createAction(
  '[TodoState] Add todo',
  props<{ todo: TodoModel }>(),
);
export const addTodoSuccess = createAction(
  '[TodoState] Add todo success',
  props<{ message: string }>(),
);
export const addTodoFail = createAction(
  '[TodoState] Add todo fail',
  props<{ message: string }>(),
);

// ============================== REMOVE TODO ==============================
export const removeTodo = createAction(
  '[TodoState] Remove todo',
  props<{ id: number }>(),
);
export const removeTodoSuccess = createAction(
  '[TodoState] Remove todo success',
  props<{ message: string }>(),
);
export const removeTodoFail = createAction(
  '[TodoState] Remove todo fail',
  props<{ message: string }>(),
);

// ============================== CHANGE TODO STATUS ==============================
export const changeTodoStatus = createAction(
  '[TodoState] Change todo status',
  props<{ id: number, done: boolean }>(),
);
export const changeTodoStatusSuccess = createAction(
  '[TodoState] Change todo status success',
  props<{ message: string }>(),
);
export const changeTodoStatusFail = createAction(
  '[TodoState] Change todo status fail',
  props<{ message: string }>(),
);
