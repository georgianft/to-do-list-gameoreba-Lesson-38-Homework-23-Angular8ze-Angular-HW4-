import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoModel } from '../models/to-do.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  @Input() todo: TodoModel;
  isInEditMode = false;
  completed: boolean = false;
  @Output() delete_ToDo = new EventEmitter();
  @Output() deleted = new EventEmitter<number>();
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  get editBtnTitle() {

    if (this.isInEditMode) {
      return 'Stop Editing';
    } else {
      return 'Edit Todo'; 
    }
  }

  get completedBtn() {
    if (this.completed=true && this.todo.completed==true) {
      return 'notcompleted';
    } else {
      return 'completed'; 
    }
  }
  // deleteTodo() {
  //   // this.todo.id
  //   const todoid = this.todo.id;
  //   console.log(todoid);
  //   this.delete_ToDo.emit(todoid);
  // }
  deleteTodo() {
    // this.todo.id
    this.deleted.emit(this.todo.id);
  }
  
  editTodo() {
    if (this.isInEditMode) {
      this.todoService.editTodo(this.todo)
      .subscribe((data) => {
        alert('successfully edited');
      });
    }
    this.isInEditMode = !this.isInEditMode;
    // თუ არის editMode-ში, აქვე გამოიძახეთ edit-ის ფუნქცია ბექში, ჩვენი todoService-ის გამოყენებით
    
  }

  CompletedTodo() {
          // Storing data:
        const myObj = { completed: !this.completed };
        const myJSON = JSON.stringify(myObj);
        localStorage.setItem("completedJSON", myJSON);
        // Retrieving data:
        const text = localStorage.getItem("completedJSON");
        const obj = JSON.parse(text);
        console.log(obj);
        console.log(obj.completed);
        this.todo.completed = obj.completed;
    if (!this.completed == !this.completed) {
      // this.todo.completed = obj.completed;
      this.todoService.CompletedTodo(this.todo)
      .subscribe((data) => {
        // alert('ხაზი გასმა/მოხსნა');
      });
    }
    this.completed = !this.completed;
    console.log(this.todo.completed);
    // თუ არის editMode-ში, აქვე გამოიძახეთ edit-ის ფუნქცია ბექში, ჩვენი todoService-ის გამოყენებით
    
  }
}
