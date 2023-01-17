import { HttpException, HttpStatus, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { Poef, User } from 'src/poef';

const uri = "mongodb+srv://inias:inias@poefapp.bsqzwks.mongodb.net/test";

@Injectable()
export class LoginService implements OnModuleInit, OnModuleDestroy{

    private client = new MongoClient(uri);

    onModuleInit() {
        this.client.connect()
    }

    onModuleDestroy() {
        this.client.close();
    }

    private async assertExists(id: number) {
        let user = await this.client.db("PoefApp").collection("Users").findOne<User>({"id": Number(id)});
        if (!user) {
            throw new HttpException("User does not exist", HttpStatus.NOT_FOUND);
        }
    }

    async login(id: number, pin: number) {
        this.assertExists(id);
        let user = await this.client.db("PoefApp").collection("Users").findOne<User>({"id": Number(id)});
        if (user.pin == pin) {
            return HttpStatus.OK;
        }
        return HttpStatus.UNAUTHORIZED;
    }
}
