import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { CoreRoutingModule } from '../core/core-routing.module';



@NgModule({
  declarations: [
    AddThemeComponent,
    CurrentThemeComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    CoreRoutingModule
  ]
})
export class ThemeModule { }
