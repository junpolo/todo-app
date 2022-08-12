import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo.model';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.sass']
})
export class AddTodoComponent implements OnInit {
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter;

  addForm!: FormGroup;
  isSubmitted = false ;

  faAlignLeft = faAlignLeft;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({todo: ['', Validators.required]})
  }

  get todo(): FormControl {
    return <FormControl>this.addForm.get('todo')
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if(this.addForm.valid){
      const newTodo = {
        id: this.generateId(),
        name: this.todo.value,
        done: false
      }

      this.onAddTodo.emit(newTodo);

      this.addForm.reset();
      this.isSubmitted = false;
    }
  }

  generateId(): string {
    return Math.random().toString(34).slice(2);
  }
}
