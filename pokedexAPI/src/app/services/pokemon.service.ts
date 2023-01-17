import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonList:Pokemon[] = [];
  pokemon:Pokemon = {} as Pokemon;

  constructor(private _http: HttpClient) {
    this.ophalen();
  }

  async ophalen() {
    let pokedex = await this.GetNiceDataFromApi();
    for (let result of pokedex) {
      result.favorite = false;
      this.pokemonList.push(result);
    }
  }

  public GetNiceDataFromApi() : Promise<Pokemon[]> {
    return lastValueFrom(this._http.get<Pokemon[]>("http://localhost:3000/pokemon"))
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
