import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Game } from '../../assets/GameInterface';
import * as steamData from '../../assets/steam.json';

@Injectable()
export class SteamService {

    private games: Game[] = [];

    constructor() {
        this.games = JSON.parse(JSON.stringify(steamData.games));
    }

    private exists(id: number) {
        if (!this.games.find((game) => game.id == id)) {
            throw new HttpException('Game not found', HttpStatus.NOT_FOUND);
        }
    }

    getAllGames(): Game[] {
        return this.games;
    }

    getGameById(id: number): Game {
        this.exists(id);
        let game = this.games.find((game) => { return game.id == id });
        return game;
    }

    getGamesByGenreId(id: number): Game[] {
        this.exists(id);
        let games = this.games.filter((game) => {return game.genre.id == id});
        return games;
    }
    
}
