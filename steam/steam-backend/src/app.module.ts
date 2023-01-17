import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenresModule } from './genres/genres.module';
import { GamesModule } from './games/games.module';
import { GenreService } from './services/genre/genre.service';

@Module({
  imports: [GamesModule, GenresModule],
  controllers: [AppController],
  providers: [AppService, GenreService],
})
export class AppModule {}
