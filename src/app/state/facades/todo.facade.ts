import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromActions from '../actions/todo.actions';
import * as fromSelectors from '../selectors/todo.selectors';
import { TodoModel } from '../../todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoFacade {
  public loader$: Observable<boolean> = this.store.select(fromSelectors.Loader);
  public todoList$: Observable<TodoModel[]> = this.store.select(fromSelectors.todoList);

  constructor(
    private readonly store: Store,
  ) {
  }

  public getTodos(): void {
    this.store.dispatch(fromActions.getTodos({}));
  }

  public addTodo(todo: TodoModel): void {
    this.store.dispatch(fromActions.addTodo({ todo }));
  }

  public removeTodo(id: number): void {
    this.store.dispatch(fromActions.removeTodo({ id }));
  }

  public changeTodoStatus(id, done): void {
    this.store.dispatch(fromActions.changeTodoStatus({ id, done }));
  }
}
