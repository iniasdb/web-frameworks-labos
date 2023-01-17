import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { SteamService } from '../services/steam/steam.service';

@Module({
  controllers: [GamesController],
  providers: [SteamService]
})
export class GamesModule {}
