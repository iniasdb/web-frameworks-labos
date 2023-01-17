import { Component } from '@angular/core';
import { TextService } from 'src/app/services/text.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {

  constructor(private textSvc:TextService) {}

  get text() {
    return this.textSvc.text;
  }

  set text(txt:string) {
    this.textSvc.text = txt;
  }
}
