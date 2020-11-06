import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoModel } from './models/to-do.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  
  }

  getTodos(): Observable <Array<TodoModel>> {
    // get-ის მერე ვწერთ  სერვერი უკან რა ტიპის მონაცემს დაგვიბრუნბეს
    // ამ შემთხვევაში სერვერი უკან დააბრუნებს todomodel-ის კლასის ობირექტს.
    return this.http.get<Array<TodoModel>>('http://localhost:3000/todos');
  }

  addTodo(todo: TodoModel): Observable<TodoModel> {
  // პოსტის რექვესთის გაგზავნა სერვერზე,
    return this.http.post<TodoModel>('http://localhost:3000/todos', todo);
  }

  editTodo(todo: TodoModel): Observable<TodoModel> {
    // პოსტის რექვესთის გაგზავნა სერვერზე,
      return this.http.put<TodoModel>(`http://localhost:3000/todos/${todo.id}`, todo);
  }
  
  deleteTodo(id: number | string) {
    // პოსტის რექვესთის გაგზავნა სერვერზე,
      return this.http.delete<TodoModel>(`http://localhost:3000/todos/${id}`);
    }

  CompletedTodo(todo: TodoModel): Observable<TodoModel> {
    // პოსტის რექვესთის გაგზავნა სერვერზე,
      return this.http.put<TodoModel>(`http://localhost:3000/todos/${todo.id}`, todo);
      
  }
    
}
