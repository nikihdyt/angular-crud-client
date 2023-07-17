import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
     
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
import { Student } from './student';
import { StudentData } from './studentData';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiURL = "http://localhost:8080/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.apiURL + '/students')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(student: any): Observable<Student> {
    return this.httpClient.post<Student>(this.apiURL + '/student', JSON.stringify(student), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  update(id:string, student:any): Observable<Student> {
    return this.httpClient.put<Student>(this.apiURL + '/student/' + id, JSON.stringify(student), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(id:string){
    return this.httpClient.delete<Student>(this.apiURL + '/student/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getById(id:string): Observable<StudentData> {
    return this.httpClient.get<StudentData>(this.apiURL + '/student/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}
