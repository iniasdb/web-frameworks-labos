import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  _list:string[] = [];
  @Input() title:string = "Mijn TODO lijst";
  @Input() size:number = 0;

  get list() {
    return this._list;
  }

  add(task:string) {
    if (this.list.length < this.size || this.size == 0) {
      this._list.push(task);
    }
  }
  
  delete(id:number) {
    this._list.splice(id, 1);
  }
}
