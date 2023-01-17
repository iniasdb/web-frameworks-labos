import { Component } from '@angular/core';
import * as  math from 'mathjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  buttons: string[] = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '0', '=', '/'];
  display:string="";
  expression:string="";
  solved:boolean=false;

  pressed(button:string) {
    if (button == "=") {
      this.solve();
    } else {
      this.addToExpres(button);
    }
  }

  addToExpres(toAdd:string) {
    if (this.solved) {
      this.display = this.expression = "";
      this.solved = false;
    }
    this.expression += toAdd;
    this.display = this.expression;
  }

  solve() {
    this.solved = true;
    console.log(this.expression);
    let result = math.evaluate(this.expression);
    console.log(result);
    this.display = result;
  }
}
