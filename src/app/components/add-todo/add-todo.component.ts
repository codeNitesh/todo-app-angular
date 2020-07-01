import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import {v4 as uuidv4} from "uuid";
import {TodoService} from "../../services/todo.service"

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }
  todoTitle: string;

  ngOnInit(): void {
  }

  addTodo(){
    const newTodo: Todo = {
      id: uuidv4(),
      title: this.todoTitle,
      isCompleted: false,
      date: new Date(),
    };
    this.todoService.addTodo(newTodo);
    this.todoTitle = "";
  }
}
