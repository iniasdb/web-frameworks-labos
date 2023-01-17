import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  RND:number = 1;
  pictures:number[] = []
  max:number = 152;

  constructor() {
    for (let i = 0; i <= this.max; i++) {
      this.pictures.push(i);
    }
  }

  ngOnInit() {
    this.random
    setInterval(()=> this.random(), 5000);
  }

  random() {
    this.RND = Math.floor(Math.random()*152);
  }

  get imageURL()
  {
    return `https://mdbootstrap.com/img/Photos/Slides/img%20(${this.RND}).jpg`  
  }

}
