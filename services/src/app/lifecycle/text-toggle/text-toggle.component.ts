import { Component } from '@angular/core';
import { TextService } from 'src/app/services/text.service';

@Component({
  selector: 'app-text-toggle',
  templateUrl: './text-toggle.component.html',
  styleUrls: ['./text-toggle.component.css']
})
export class TextToggleComponent {

  constructor(private textSvc:TextService) {}

  hide() {
    this.textSvc.hidden = true;
  }

  show() {
    this.textSvc.hidden = false;
  }

  get hidden() {
    return this.textSvc.hidden;
  }
}
