import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

@Module({
    imports: [DatabaseModule],
    controllers: [PokemonController],
    providers: [PokemonService]
})
export class PokemonModule {}
