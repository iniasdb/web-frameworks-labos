import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import pokedex from "../../assets/pokedex.json";

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent {

  pokemon:Pokemon = {} as Pokemon;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = "";
    this.route.paramMap.subscribe(params => {
      id = params.get("id")!;
    });

    for (let result of pokedex) {
      if (result.id == id) {
        this.pokemon = JSON.parse(JSON.stringify(result));
        console.log(this.pokemon);
      }
    }
  }
}

interface Sprite {
  animated:string;
  normal:string;
}

interface Pokemon {
  id:number;
  species_id:number;
  height:number;
  weight:number;
  base_experience:number;
  order:number;
  is_default:number;
  name:string;
  sprites:Sprite;
}