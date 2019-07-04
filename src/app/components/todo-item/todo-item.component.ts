import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import {Todo} from 'src/app/models/Todos'

import { TodoService } from './../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  // taking the input that has been passed
  @Input() todo:Todo;
  @Output() deleteTodo:EventEmitter<Todo>=new EventEmitter();



  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  // set dynamic classes
  setClasses(){
    let classes={
      todo:true,
      'is-complete':this.todo.completed
    }
    return classes;
  }

  // on toggle, of the checkbox
  onToggle(todo){
    // toogle in ui
    todo.completed = !todo.completed;
    // toggle in server
    this.todoService.toogleCompleted(todo).subscribe(todo=>{
      console.log(todo);
    });

  }

  // on click of the delete button
  onDelete(todo){
    // to delete the record
    this.deleteTodo.emit(todo);

  }

}
