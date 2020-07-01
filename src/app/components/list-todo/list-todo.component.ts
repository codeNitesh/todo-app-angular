import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../services/todo.service"
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  // declare it
  todo: Todo[]
  isEmpty: boolean = false;

  // asking access of Todo Serive here!
  constructor( private todoService: TodoService ) { }

  // on initialisation it will subscribe
  // and will get all todo so that it can have list and delete funct.

  // To be more precious, this init method is getting all the todos available 
  // at the time of start... (because, we don't want to provide a generate todo
  // button, in order to list all the available todos.)
  ngOnInit(): void {
    this.todoService.getAllTodo().subscribe(todo =>{
      this.todo = todo;
    })
  }

  changeTodoStatus(todoID: number){
    this.todoService.changeStatus(todoID)
  }

  deleteTodo(todoID: number){
    this.todoService.deleteTodo(todoID)
    if(this.todo.length == 0)
      this.isEmpty = true;
  }

}
