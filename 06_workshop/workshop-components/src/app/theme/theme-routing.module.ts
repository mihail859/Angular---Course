import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { AddThemeComponent } from './add-theme/add-theme.component';

const routes: Routes = [
    {path: 'themes',  component: MainComponent},
    {path: 'newTheme', component: AddThemeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
