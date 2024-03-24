import { Component } from '@angular/core';

type User = {
  name: string;
  grade: number;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  isToggled: boolean  = false;

  students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 72 },
    { name: 'Charlie', grade: 90 },
    { name: 'David', grade: 68 },
    { name: 'Eve', grade: 95 }
  ] as User[];

  getGradeColor(grade: number): string {
    if (grade >= 90) {
      return "green"; // High grades in green
    } else if (grade >= 70) {
      return "orange"; // Medium grades in orange
    } else {
      return "red"; // Low grades in red
    }
  }

  btnHandler(event: Event) {
    console.log("clicked!", event)
    this.isToggled = !this.isToggled
  }
}
