import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo.model';
import { faTimes, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent implements OnInit {
  @Output() onToggleStatus: EventEmitter<Todo> = new EventEmitter;
  @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter;
  @Input() todo!: Todo;
  faTimes = faTimes;
  faTrashCan = faTrashCan;

  constructor() { }

  ngOnInit(): void {
  }

  toggleStatus(todo: Todo): void {
    this.onToggleStatus.emit(todo);
  }

  deleteTodo(todo: Todo): void {
    this.onDeleteTodo.emit(todo);
  }
}
