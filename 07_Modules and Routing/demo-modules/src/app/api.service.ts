import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInterface } from 'src/templates/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<any>("http://localhost:3030/jsonstore/users")
  }

  deleteUser(id: number){
    return this.http.delete<any>(`http://localhost:3030/jsonstore/users/${id}`)
  }


}
