import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DelijnService {

  private key = { "Ocp-Apim-Subscription-Key": "c789b014acc84b53adc4e3058d248e14" };
  private halte: number = 200144;
  private entiteit: number = 1;
  private gemeenteUrl: string = "https://api.delijn.be/DLKernOpenData/v1/beta/gemeenten";
  private gemeente: number = -1;

  constructor(private _http: HttpClient) { }

  get Lijst(): Observable<Delijn> {
    let url = `https://api.delijn.be/DLKernOpenData/api/v1/haltes/${this.entiteit}/${this.halte}/real-time?maxAantalDoorkomsten=10&`
    return this._http.get<Delijn>(url, { headers: this.key });
  }

  get Gemeenten(): Observable<Gemeentes> {
    return this._http.get<Gemeentes>(this.gemeenteUrl, { headers: this.key });
  }

  get Haltes(): Observable<Haltes> {
    let halteUrl = `https://api.delijn.be/DLKernOpenData/v1/beta/gemeenten/${this.gemeente}/haltes`;
    return this._http.get<Haltes>(halteUrl, { headers: this.key });
  }

  set Gemeente(gemeente: number) {
    this.gemeente = gemeente;
  }

  set Halte(halte: number) {
    this.halte = halte;
  }

  get Halte() {
    return this.halte;
  }

}

export interface Halte {
  entiteitnummer: string;
  haltenummer: string;
  omschrijving: string;
  omschrijvingLang: string;
  gemeentenummer: number;
  omschrijvingGemeente: string;
  districtCode: string;
  geoCoordinaat: GeoCoordinaat;
  halteToegankelijkheden: any[];
  hoofdHalte?: any;
  taal: string;
  links: Link[];
}

export interface GeoCoordinaat {
  latitude: number;
  longitude: number;
}

export interface Haltes {
  haltes: Halte[];
}

export interface Gemeente {
  gemeentenummer: number;
  omschrijving: string;
  links: Link[];
}

export interface Gemeentes {
  gemeenten: Gemeente[];
}

export interface Link {
  rel: Rel;
  url: string;
}

export interface Doorkomsten {
  entiteitnummer: string;
  lijnnummer: number;
  richting: string;
  ritnummer: string;
  bestemming: string;
  vias: string[];
  dienstregelingTijdstip: Date;
  "real-timeTijdstip": Date;
  vrtnum: string;
  predictionStatussen: string[];
  links: Link[];
}

export interface HalteDoorkomsten {
  haltenummer: string;
  doorkomsten: Doorkomsten[];
}

export enum Rel {
  Halte = "halte",
  Lijnrichting = "lijnrichting",
  Self = "self",
}

export interface Delijn {
  halteDoorkomsten: HalteDoorkomsten[];
  links: Link[];
  doorkomstNotas: any[];
  ritNotas: any[];
  omleidingen: any[];
}
