import { Component, OnInit } from '@angular/core';
import { DelijnService, Gemeente, Gemeentes, Halte, Haltes } from '../services/delijn.service';

@Component({
  selector: 'app-haltes',
  templateUrl: './haltes.component.html',
  styleUrls: ['./haltes.component.css']
})
export class HaltesComponent implements OnInit {
  
  gemeentes: Gemeente[] = [];
  gemeenteInput: string = "";
  haltes: Halte[] = [];
  resultList: Gemeente[] = [];
  halteChosen: boolean = false;
  gemeenteChosen: boolean = false;

  constructor(private dlSvc: DelijnService) {}

  ngOnInit() {
    this.dlSvc.Gemeenten.subscribe(d => this.gemeentenOphalen(d));
  }

  gemeentenOphalen(d:Gemeentes) {
    this.gemeentes = d.gemeenten;
  }

  haltesOphalen(d:Haltes) {
    this.haltes = d.haltes;
    console.log(this.haltes);
  }

  checkGemeente() {
    this.gemeenteChosen = false;
    this.resultList = this.gemeentes.filter((data) => {
      return data.omschrijving.toLowerCase().startsWith(this.gemeenteInput.toLocaleLowerCase());
    })
  }

  kiesGemeente(gemeente: Gemeente) {
    this.dlSvc.Gemeente = gemeente.gemeentenummer;
    this.gemeenteInput = gemeente.omschrijving;
    this.gemeenteChosen = true;
    this.dlSvc.Haltes.subscribe(d => this.haltesOphalen(d));
  }

  kiesHalte(halteNr: string) {
    this.dlSvc.Halte = Number(halteNr);
    this.halteChosen = true;
    console.log(this.dlSvc.Halte);
  }

}
