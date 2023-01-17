import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  private _text:string = "";
  private _hidden : boolean = false;
  
  constructor() { }

  set text(txt:string) {
    this._text = txt;
  }

  get text() {
    return this._text;
  }

  set hidden(hidden:boolean) {
    this._hidden = hidden;
  }

  get hidden() {
    return this._hidden;
  }
}
