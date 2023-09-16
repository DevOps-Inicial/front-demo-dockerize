import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

import { User } from '@user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Spring Boot 3 Backend API Path
  REST_API: string = 'http://localhost:9060/api/v1';

  // Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  // CRUD Methods for User entity
  // List all users
  getAllUsers() {
    return this.httpClient.get(`${this.REST_API}/users`);
  }
  // Get User by ID
  getUserByID(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/users/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders})
    .pipe(
      map((response: any)=> {
      return response || {};
    }),
    catchError(this.handleError)
    );
  }
  // Create User
  createUser(data: User): Observable<any> {
    let API_URL = `${this.REST_API}/users`;
    return this.httpClient
    .post(API_URL, data)
    .pipe(catchError(this.handleError));
  }
  // Update User
  updateUser(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/users/${id}`;
    return this.httpClient.put(API_URL, data, {headers: this.httpHeaders})
    .pipe(catchError(this.handleError));
  }
  // Delete User by ID
  deleteUserByID(id: any): Observable<any> {
    let API_URL =  `${this.REST_API}/users/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Complementary methods Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }
}
