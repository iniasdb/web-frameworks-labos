import { Injectable } from '@angular/core';
import pokedex from "../../assets/pokedex.json";


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonList:Pokemon[] = [];
  pokemon:Pokemon = {} as Pokemon;

  constructor() {
    for (let result of pokedex) {
      let resultString = JSON.stringify(result);
      let pokemon = JSON.parse(resultString);
      pokemon.favorite = false;
      this.pokemonList.push(pokemon);
    }
    console.log(this.pokemonList);
  }

  getPokemonById(id:number) {
    this.pokemonList.forEach(pokemon => {
      if (pokemon.id == id) {
        this.pokemon = pokemon;
      }
    });
  }

  favorite(flag:boolean, id:number) {
    this.pokemonList[id-1].favorite = flag;
  }
}

export interface Sprite {
  animated:string;
  normal:string;
}

export interface Pokemon {
  id:number;
  species_id:number;
  height:number;
  weight:number;
  base_experience:number;
  order:number;
  is_default:number;
  name:string;
  sprites:Sprite;
  favorite:boolean;
}
