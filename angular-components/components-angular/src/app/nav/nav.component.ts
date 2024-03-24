import { Component } from "@angular/core";

@Component({
    selector: 'app-nav',
    template: '<div id="nav-wrapper">Hello Navigation <span>{{title}}</span></div>',
    styles: ['#nav-wrapper {background-color:pink; padding: 20px}', 'span {background-color: red; padding: 10px}']
})
export class NavComponent{
    title: string= "My Navigation"
}