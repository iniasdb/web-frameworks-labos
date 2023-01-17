import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService implements OnInit {
  RND:number = 1;
  pictures:number[] = [];
  max:number = 152;

  constructor() {
    for (let i = 0; i <= this.max; i++) {
      this.pictures.push(i);
    }

    this.random();
    setInterval(()=> this.random(), 5000);

  }

  ngOnInit() {
  }

  random() {
    this.RND = Math.floor(Math.random()*152);
  }

  get imageURL()
  {
    return `https://mdbootstrap.com/img/Photos/Slides/img%20(${this.RND}).jpg`  
  }
}
