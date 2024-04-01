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
    this.apiService.getUsers().subscribe(u => {
      this.users = Object.values(u); // Assign fetched users to the component property
      console.log(this.users);
    });
  }
  deleteFunc(id: number): void {
    console.log(id);
    
    
    this.apiService.deleteUser(id).subscribe(
      () => {
        // If deletion is successful, remove the user from the local array
        this.users = this.users.filter(user => user.id !== id);
        console.log(`User with ID ${id} deleted successfully.`);
      },
      (error: any) => {
        console.error(`Error deleting user with ID ${id}:`, error);
      }
    );
  }
}
