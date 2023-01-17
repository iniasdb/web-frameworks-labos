import { Component, Input, OnInit } from '@angular/core';
import moment from 'moment';
import { DelijnService, Delijn } from '../services/delijn.service';

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.css']
})
export class DeparturesComponent implements OnInit {

  doorkomsten: Delijn = {} as Delijn;
  tijden: number[] = [];
  halte: number = 200144;
  geenDoorkomsten: boolean = false;

  constructor(private dlSvc: DelijnService) {}

  ngOnInit(): void {
    this.update();
    setInterval(() => this.checkChanges(), 500);
  }

  update() {
    this.dlSvc.Lijst.subscribe(d => this.ophalen(d));
  }

  checkChanges() {
    if (this.dlSvc.Halte != this.halte) {
      this.halte = this.dlSvc.Halte;
      this.update();
    }
  }

  ophalen(d:Delijn) {
    this.doorkomsten = d;
    if (this.doorkomsten.halteDoorkomsten.length > 0) {
      this.geenDoorkomsten = false;
      this.doorkomsten.halteDoorkomsten.forEach(h => {
        h.doorkomsten.forEach(e => {
          let time = moment(e['real-timeTijdstip']);
          let fromnow = - moment().diff(time, 'minutes');
          this.tijden.push(fromnow);
        })
      })
    } else {
      console.log(this.doorkomsten.halteDoorkomsten.length);
      this.geenDoorkomsten = true;
    }
  }

}
