import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pokeSvc: PokemonService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pokeSvc.ophalenById(params.get("id")!);
    });
  }

  get pokemon() {
    return this.pokeSvc.pokemon;
  }
}