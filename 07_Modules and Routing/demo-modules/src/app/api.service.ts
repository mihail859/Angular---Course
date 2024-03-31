import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInterface } from 'src/templates/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(credentials: LoginInterface){
    return this.http.post<LoginInterface>("http://localhost:3030/users/login", credentials)
  }
}
