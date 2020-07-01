import { Injectable } from '@angular/core';
import {Todo} from "./../models/Todo"
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // This service class will contain all the main 
  // business logic for the application.

  // 1. Let's add some default todos 
  // (as we are not using any database)

  todo: Todo[]
  constructor() { 
    this.todo=[
      {
        id: 1,
        title: 'Learn Angular',
        isCompleted: false,
        date: new Date(),
      },
      {
        id: 2,
        title: 'Learn JavaScript',
        isCompleted: true,
        date: new Date(),
      },
      {
        id: 3,
        title: 'Learn Django',
        isCompleted: false,
        date: new Date(),
      },
    ];
  }

  // 2. Create business logic of methods
  getAllTodo(){
    return of(this.todo)
  }

  addTodo(todo: Todo){
    this.todo.push(todo)
  }

  changeStatus(todoID: number){
    for(var index=0; index < this.todo.length; index++){
      if(this.todo[index].id == todoID){
        this.todo[index].isCompleted = !this.todo[index].isCompleted
      }
    }
  }

  deleteTodo(todoID: number){
    for(var index=0; index < this.todo.length; index++){
      if(this.todo[index].id == todoID){
        this.todo.splice(index, 1)
        return;
      }
    }
  }
  
}