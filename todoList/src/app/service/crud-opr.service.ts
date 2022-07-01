import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../modal/task';

@Injectable({
  providedIn: 'root',
})
export class CrudOprService {
  serviceUrl: string;

  constructor(private httpClient: HttpClient) {
    this.serviceUrl = 'http://localhost:3000/task';
  }

  addTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.serviceUrl, task);
  }

  getAllTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.serviceUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    return this.httpClient.delete<Task>(this.serviceUrl + '/' + task.id);
  }

  editTask(task: Task): Observable<Task> {
    return this.httpClient.put<Task>(this.serviceUrl + '/' + task.id, task);
  }

}
