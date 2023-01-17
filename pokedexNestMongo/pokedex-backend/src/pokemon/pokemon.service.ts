import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Pokemon } from './pokemon.interface';
import { Db, MongoClient } from 'mongodb';

@Injectable()
export class PokemonService {

    pokemon: Pokemon[] = [];

    constructor(@Inject("DATABASE_CONNECTION") private db: Db) {}

    private exists(id: string) {
        if (!this.pokemon.find((pokemon) => pokemon.id === id)) {
            throw new HttpException('Pokemon not found', HttpStatus.NOT_FOUND);
        }
    }

    async getAllPokemon(): Promise<Pokemon> {
        return await this.db.collection("pokemon").find().toArray();
    }

    getPokemonById(id: string) {
        this.exists(id);
        return this.pokemon.find((pokemon) => pokemon.id === id);
    }

    createPokemon(pokemon: PokemonInterface) {
        const id = Number(this.pokemon[this.pokemon.length-1].id)+1;
        pokemon.id = id.toString();
        this.pokemon.push(pokemon);
        return HttpStatus.OK;
    }

    updatePokemon(id: string, pokemon: PokemonInterface) {
        this.exists(id);
        pokemon.id = id;
        const index = this.pokemon.findIndex((pokemon) => pokemon.id === id);
        this.pokemon[index] = pokemon;
        return HttpStatus.OK;
    }

    deletePokemon(id: string) {
        this.exists(id);
        const index = this.pokemon.findIndex((pokemon) => pokemon.id === id);
        this.pokemon.splice(index, 1);
        return HttpStatus.OK;
    }
}
