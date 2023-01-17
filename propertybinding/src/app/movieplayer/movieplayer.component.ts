import { Component } from '@angular/core';

@Component({
  selector: 'app-movieplayer',
  templateUrl: './movieplayer.component.html',
  styleUrls: ['./movieplayer.component.css']
})
export class MovieplayerComponent {
  resolutions: Resolution[] = [
    { width: 640, height: 400 },
    { width: 800, height: 600 }
  ]
  activeRes: Resolution;
  playing : boolean = false;

  ngAfterViewInit() {
    this.playPause(true);
  }

  constructor() {
    this.activeRes = this.resolutions[0];
  }

  playPause(play:boolean) {
    this.playing = play;
  }

  SelRes(res:string) {
    this.activeRes = this.resolutions[Number(res)];
  }
  
}

export interface Resolution {
  width: number;
  height: number;
}
