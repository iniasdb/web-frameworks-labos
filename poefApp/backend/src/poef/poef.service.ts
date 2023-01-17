import { HttpException, HttpStatus, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { User } from 'src/poef';
import usersJson from '../assets/users.json';

const uri = "mongodb+srv://inias:inias@poefapp.bsqzwks.mongodb.net/test";

@Injectable()
export class PoefService implements OnModuleInit, OnModuleDestroy {

    private client = new MongoClient(uri);

    constructor() {
        this.fillDb();
    }

    onModuleInit() {
        this.client.connect()
    }

    onModuleDestroy() {
        this.client.close();
    }

    private async fillDb() {
        let users = await this.client.db("PoefApp").collection("Users").find<User>({}).toArray();
        if (users.length === 0) {
            await this.client.db("PoefApp").collection("Users").insertMany(usersJson);
        }
    }

    async getAllUsers() {
        return await this.client.db("PoefApp").collection("Users").find<User>({}).toArray();
    }

    private async assertExists(id: number) {
        let user = await this.client.db("PoefApp").collection("Users").findOne<User>({"id": Number(id)});
        if (!user) {
            throw new HttpException("User does not exist", HttpStatus.NOT_FOUND);
        }
    }

    private async getMaxId() {
        let allPokemon = await this.getAllUsers();
        return (Math.max(...allPokemon.map(p => p.id)) + 1);
    }

    async getUserById(id: number) {
        await this.assertExists(id);
        return await this.client.db("PoefApp").collection("Users").findOne<User>({"id": Number(id)});
    }

    async updateUser(id: number, user: User) {
        await this.assertExists(id);
        let oldUser = await this.getUserById(id);
        await this.client.db("PoefApp").collection("Users").updateOne({id: oldUser.id},{ $set: {
            id: user.id,
            name: user.name,
            pin: user.pin,
            poef: user.poef
        } });
        return HttpStatus.ACCEPTED;
    }

    async addUser(user: User) {
        let maxId = await this.getMaxId();
        user.id = maxId;
        await this.client.db("PoefApp").collection("Users").insertOne(user);
        return HttpStatus.CREATED;
    }

    async deleteUser(id: number) {
        await this.assertExists(id);
        await this.client.db("PoefApp").collection("Users").deleteOne({id: Number(id)});
        return HttpStatus.ACCEPTED;
    }

    async addToPoef(id: number, poef: string[]) {
        await this.assertExists(id);
        let oldUser = await this.getUserById(id);
        let newPoef: string[] = oldUser.poef.concat(poef);
        console.log(newPoef);
        await this.client.db("PoefApp").collection("Users").updateOne({_id: oldUser._id},{ $set: {
            poef: newPoef
        } });
        return HttpStatus.ACCEPTED;
    }
    
}
