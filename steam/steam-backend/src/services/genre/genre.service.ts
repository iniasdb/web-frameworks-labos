import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Genre } from '../../assets/GenreInterface';
import * as steamData from '../../assets/steam.json';

@Injectable()
export class GenreService {

    private genres: Genre[] = [];

    constructor() {
        this.genres = JSON.parse(JSON.stringify(steamData.genres));
    }

    private exists(id: number) {
        if (!this.genres.find((genre) => genre.id == id)) {
            throw new HttpException('Game not found', HttpStatus.NOT_FOUND);
        }
    }

    getAllGenres() {
        return this.genres;
    }

    getGenreById(id: number): Genre {
        this.exists(id);
        let genre = this.genres.find((genre) => { return genre.id == id});
        return genre;
    }
}
