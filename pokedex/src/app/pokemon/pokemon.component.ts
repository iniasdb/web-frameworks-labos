import { Component } from '@angular/core';
import pokedex from "../../assets/pokedex.json";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  pokemonList:Pokemon[] = [];

  ngOnInit() {
    for (let result of pokedex) {
      let pokemon = JSON.parse(JSON.stringify(result));
      this.pokemonList.push(pokemon);
    }
    console.log(this.pokemonList);
  }
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
  sprite:string[];
}
