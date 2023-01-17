import { Module } from '@nestjs/common';
import { GenreService } from 'src/services/genre/genre.service';
import { SteamService } from 'src/services/steam/steam.service';
import { GenresController } from './genres.controller';

@Module({
  controllers: [GenresController],
  providers: [GenreService, SteamService]
})
export class GenresModule {}
