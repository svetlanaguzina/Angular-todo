import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from './user/user.model';

const baseURL = "https://jsonplaceholder.typicode.com/users"

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get(`${baseURL}`).pipe(map((data: any) => {
        return data
    }));
  }

  createUser(user: User): Observable<any> {
    return this.http.post(`${baseURL}`, user);
  }

  delete(id: number): Observable<User> {
    return this.http.delete<User>(`${baseURL}/${id}`)
  };
  
}
