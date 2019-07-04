import { Component, OnInit } from '@angular/core';
import { TodoService} from '../../services/todo.service';

import {Todo} from '../../models/Todos'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // the structured array
  todos:Todo[];

  constructor( private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos=>{
      this.todos=todos;
    });
  }

  // delete the Todo
  deleteTodo(todo:Todo){
    // deleting from the UI
    this.todos=this.todos.filter(t=> t.id !== todo.id);
    // deleting from service
    this.todoService.deleteTodo(todo).subscribe(todo=>{
      console.log(todo);
    });  
  }

  // adding the todo
  addTodo(todo:Todo){

    // adding todo from service
    this.todoService.addTodo(todo).subscribe(todo=>{
      console.log(todo);
      this.todos.push(todo);
    });  
  }


}
