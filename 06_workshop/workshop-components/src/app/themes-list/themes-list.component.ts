import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent  implements OnInit {
  themes: Theme[] = [];

  constructor(private api: ApiService){

  }

  ngOnInit() {
    this.api.getThemes().subscribe((theme) => {
      console.log(theme);
      this.themes = theme;
    })
  }

}
