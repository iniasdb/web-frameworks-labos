import { ObjectId } from "mongodb";

export interface User {
    _id?: ObjectId;
    id: number;
    name: string;
    pin: number;
    poef: string[];
}

export enum Poef {
    Cola = 1,
    Fanta = 1,
    Bier = 1,
    Chips = 1,
    Despe = 1.5,
    Duvel = 2
}