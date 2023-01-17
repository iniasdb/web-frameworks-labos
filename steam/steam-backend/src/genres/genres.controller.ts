import { Controller, Get, Param } from '@nestjs/common';
import { GenreService } from 'src/services/genre/genre.service';
import { SteamService } from 'src/services/steam/steam.service';

@Controller('genres')
export class GenresController {
    constructor(private readonly genreSvc: GenreService, private readonly steamSvc: SteamService) {}

    @Get()
    getAllGenres() {
        return this.genreSvc.getAllGenres();
    }

    @Get(':id')
    getGenreById(@Param('id') id: number) {
        return this.genreSvc.getGenreById(id);
    }

    @Get(':id/games')
    getGamesByGenreId(@Param('id') id: number) {
        return this.steamSvc.getGamesByGenreId(id);
    }
}
