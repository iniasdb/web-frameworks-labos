import { Controller, Get, Put } from '@nestjs/common';
import { Body, Delete, Param, Post } from '@nestjs/common/decorators';
import { Poef, User } from 'src/poef';
import { PoefService } from './poef.service';

@Controller('poef')
export class PoefController {

    constructor(private poefSvc: PoefService) {}

    @Get()
    async getAllUsers() {
        return await this.poefSvc.getAllUsers();
    }

    @Get(":id")
    async getUserById(@Param("id") id: number) {
        return await this.poefSvc.getUserById(id);
    }

    @Put(":id")
    async updateUser(@Param("id") id: number, @Body() user: User) {
        return await this.poefSvc.updateUser(id, user);
    }

    @Put("/add/:id")
    async updatePoef(@Param("id") id: number, @Body() poef: string[]) {
        return await this.poefSvc.addToPoef(id, poef);
    }

    @Post()
    async addUser(@Body() user: User) {
        return await this.poefSvc.addUser(user);
    }

    @Delete(":id")
    async deleteUser(@Param("id") id: number) {
        return await this.poefSvc.deleteUser(id);
    }
}
