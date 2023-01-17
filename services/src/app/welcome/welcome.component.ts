import { Component } from '@angular/core';
import { WelcomeService } from '../services/welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  // RND:number = 1;
  // pictures:number[] = []
  // max:number = 152;

  constructor(private welcomeSvc:WelcomeService) {}

  get imageURL() {
    return this.welcomeSvc.imageURL;
  }

  // ngOnInit() {
  //   for (let i = 0; i <= this.max; i++) {
  //     this.pictures.push(i);
  //   }
  // }

  //   this.random
  //   setInterval(()=> this.random(), 5000);
  // }

  // random() {
  //   this.RND = Math.floor(Math.random()*152);
  // }

  // get imageURL()
  // {
  //   return `https://mdbootstrap.com/img/Photos/Slides/img%20(${this.RND}).jpg`  
  // }

}
