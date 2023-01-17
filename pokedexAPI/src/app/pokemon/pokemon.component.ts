import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {

  constructor(private pokeSvc: PokemonService) {}

  get pokeList() {
    return this.pokeSvc.pokemonList;
  }

  favorite(flag:boolean, id:number) {
    console.log(flag);
    console.log(id);
    this.pokeSvc.favorite(flag, id);
  }

}
