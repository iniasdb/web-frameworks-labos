export class Carbrand {
    name:string;
    models:string[];
    constructor(name:string, ...models: string[]) {
        this.name = name;
        this.models = models;
    }
}