import { Component, OnInit } from '@angular/core';
import { TodoModel } from './todo.model';
import * as faker from 'faker';
import { Observable } from 'rxjs';
import { TodoFacade } from './state/facades/todo.facade';
import { filter, skip } from 'rxjs/operators';
import { CommonAnimations } from './common.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [CommonAnimations.fadeIn],
})
export class AppComponent implements OnInit {
  // Start JSON Server => json-server --watch db.json

  public taskName: string;
  public todoList$: Observable<TodoModel[]>;
  public loader$: Observable<boolean>;

  constructor(
    private readonly todoFacade: TodoFacade,
  ) {
  }

  public ngOnInit(): void {
    this.todoFacade.getTodos();

    this.todoList$ = this.todoFacade.todoList$;
    this.loader$ = this.todoFacade.loader$;

    this.loader$.pipe(skip(1), filter(Boolean)).subscribe(() => this.todoFacade.getTodos());
  }

  public addTodo(): void {
    const newTask = {
      id: faker.random.number,
      name: this.taskName,
      done: false,
    };

    this.todoFacade.addTodo(newTask);
    this.taskName = '';
  }

  public removeTodo(id: number): void {
    this.todoFacade.removeTodo(id);
  }

  public changeTodoStatus(id: number, done: boolean): void {
    this.todoFacade.changeTodoStatus(id, done);
  }
}
