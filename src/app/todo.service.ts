import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoModel } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private endpoint = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) {
  }

  public getTodos(): Observable<Array<TodoModel>> {
    return this.http.get<Array<TodoModel>>(`${this.endpoint}/todos`);
  }

  public addTodo(todo: TodoModel): Observable<TodoModel> {
    return this.http.post(`${this.endpoint}/todos`, todo);
  }

  public removeTodo(id: number): Observable<TodoModel> {
    return this.http.delete(`${this.endpoint}/todos/${id}`);
  }

  public changeTodoStatus(id: number, done: boolean): Observable<TodoModel> {
    return this.http.patch(`${this.endpoint}/todos/${id}`, { done });
  }
}
