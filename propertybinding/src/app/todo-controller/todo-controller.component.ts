import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-controller',
  templateUrl: './todo-controller.component.html',
  styleUrls: ['./todo-controller.component.css']
})
export class TodoControllerComponent {
  title:string = "Mijn todo lijst";
  size:number = 0;
}
