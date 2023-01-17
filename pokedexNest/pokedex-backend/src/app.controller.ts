import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PokemonService } from './pokemon/pokemon.service';
import { PokemonInterface } from './pokemon/pokemonInterface';

@Controller()
export class AppController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  getAllPokemon(): PokemonInterface[] {
    return this.pokemonService.getAllPokemon();
  }

  @Get(':id')
  getPokemonByID(@Param('id') id: string): PokemonInterface {
    return this.pokemonService.getPokemonById(id);
  }

  @Post()
  createPokemon(@Body() pokemon: PokemonInterface) {
    return this.pokemonService.createPokemon(pokemon);
  }

  @Put(':id')
  updatePokemon(@Param('id') id: string, @Body() pokemon: PokemonInterface) {
    return this.pokemonService.updatePokemon(id, pokemon);
  }

  @Delete(':id')
  deletePokemon(@Param('id') id: string) {
    return this.pokemonService.deletePokemon(id);
  }
}
