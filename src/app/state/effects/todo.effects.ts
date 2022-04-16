import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as fromStore from '../index';
import * as fromActions from '../actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TodoService } from '../../todo.service';

@Injectable({
  providedIn: 'root',
})
export class HrCreateEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<fromStore.RootState>,
    private readonly todoService: TodoService,
  ) {
  }

  GetTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getTodos),
      switchMap(() =>
        this.todoService.getTodos().pipe(
          map((payload) =>
            fromActions.getTodosSuccess({ payload }),
          ),
          catchError(() =>
            of(fromActions.getTodosFail({
                message: 'Something went wrong.',
              }),
            ),
          ),
        ),
      ),
    ),
  );

  AddTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.addTodo),
      switchMap(({ todo }) =>
        this.todoService.addTodo(todo).pipe(
          map(() =>
            fromActions.addTodoSuccess({ message: 'All Good =)' }),
          ),
          catchError(() =>
            of(fromActions.addTodoFail({
                message: 'Something went wrong.',
              }),
            ),
          ),
        ),
      ),
    ),
  );

  RemoveTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.removeTodo),
      switchMap(({ id }) =>
        this.todoService.removeTodo(id).pipe(
          map(() =>
            fromActions.removeTodoSuccess({ message: 'All Good =)' }),
          ),
          catchError(() =>
            of(fromActions.removeTodoFail({
                message: 'Something went wrong.',
              }),
            ),
          ),
        ),
      ),
    ),
  );

  ChangeTodoStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.changeTodoStatus),
      switchMap(({ id, done }) =>
        this.todoService.changeTodoStatus(id, done).pipe(
          map(() =>
            fromActions.changeTodoStatusSuccess({ message: 'Something went wrong.' }),
          ),
          catchError(() =>
            of(fromActions.changeTodoStatusFail({
                message: 'Something went wrong.',
              }),
            ),
          ),
        ),
      ),
    ),
  );
}
