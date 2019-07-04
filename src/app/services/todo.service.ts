import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Todo} from '../models/Todos';

// setting headers for the Http 
const httpOptions={
  header:new HttpHeaders({
    'Content-Type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoUrl='https://jsonplaceholder.typicode.com/todos';
  todosLimit='?_limit=5';

  constructor(private http:HttpClient) { }

  // get request to get todos
  getTodos():Observable<Todo[]>{
   // get request using HTTP to json placeholder
    return this.http.get<Todo[]>(`${this.todoUrl}${this.todosLimit}`);
  }

  //put request to edit the data
  toogleCompleted(todo: Todo):Observable<any>{
    const url=`${this.todoUrl}/${todo.id}`;
    return this.http.put(url,todo,httpOptions)
  }

  // deleteing todo
  deleteTodo(todo:Todo):Observable<Todo>{
    const url=`${this.todoUrl}/${todo.id}`;
    return this.http.delete(url,httpOptions)
  }
  // adding a todo
  addTodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.todoUrl,todo,httpOptions);
  }



}
