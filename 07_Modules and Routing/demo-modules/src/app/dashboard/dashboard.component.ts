import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any[] = []; // Define an array to store users

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe(users => {
      this.users = users; // Assign fetched users to the component property
      console.log(this.users);
    });
  }
}
