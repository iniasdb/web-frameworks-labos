import { Controller, Get, Param } from '@nestjs/common';
import { Game } from 'src/assets/GameInterface';
import { SteamService } from '../services/steam/steam.service';

@Controller('games')
export class GamesController {
    constructor(private readonly steamSvc: SteamService) {}

    @Get()
    getHello(): Game[] {
      return this.steamSvc.getAllGames();
    }

    @Get(':id')
    getGameById(@Param('id') id: number) {
      return this.steamSvc.getGameById(id);
    }
}
