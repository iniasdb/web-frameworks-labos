import { Module } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';

@Module({
    providers: [
        {
            provide: "DATABASE_CONNECTION",
            useFactory: async(): Promise<Db> => {
                try {
                    const client = await MongoClient.connect("mongodb+srv://inias:iniasWF@webframeworks.aoxbby7.mongodb.net/?retryWrites=true&w=majority");

                    return client.db("pokemon");
                } catch (error) {
                    throw error;
                }
            }
        }
    ],
    exports: ['DATABASE_CONNECTION']
})
export class DatabaseModule {}
