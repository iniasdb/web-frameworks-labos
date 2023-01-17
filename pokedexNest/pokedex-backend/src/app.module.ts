import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonService } from './pokemon/pokemon.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PokemonService]
})
export class AppModule {}
