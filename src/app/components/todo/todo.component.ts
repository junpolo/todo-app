import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/Todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => this.todos = todos);
  }

  addTodo(newTodo: Todo): void {
    this.todoService.addTodo(newTodo);
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo);
  }

  toggleStatus(todo: Todo): void {
    this.todoService.toggleStatus(todo);
  }
}
