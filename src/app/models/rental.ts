import { User } from "./user";

export class Rental {

  constructor(private name: string, 
    private location: string,
    private pictureSources: Array<string>,
    private host: User,
    private price: string,
    public id: number) {}

    getLocation() { return this.location; }

    getPictureSources() { return this.pictureSources; }

    getCoverPhoto() { return this.pictureSources[0]; }

    getHost() { return this.host; }

    getPrice() { return this.price; }

    getName() { return this.name; }

    getEmail() { return this.host.getEmail(); }
}