import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInterface } from 'src/templates/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users")
  }
}
