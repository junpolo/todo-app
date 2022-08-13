import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../models/Todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];

  constructor() {
    this.getLocalStorage();
  }

  getLocalStorage(): void {
    const storage = localStorage.getItem('todos');
    if(storage) this.todos = JSON.parse(storage)
  }

  updateLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  getTodos(): Observable<Todo[]> {
    const todos = of(this.todos);
    return todos;
  }

  addTodo(todo: Todo): void  {
    this.todos.unshift(todo);
    this.updateLocalStorage();
  }

  deleteTodo(todo: Todo): void {
    const index = this.todos.findIndex((object) => object.id === todo.id);
    if(index !== -1) this.todos.splice(index, 1);
    this.updateLocalStorage();
  }

  toggleStatus(todo: Todo): void {
    const index = this.todos.findIndex((object) => object.id === todo.id);
    this.todos[index].done = ! todo.done;
    this.updateLocalStorage();
  }
}
