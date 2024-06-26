export class Pokemon {
    id: number;
    name: string;
    hp: number;
    cp: number;
    picture: string;
    types: string[];
    created: Date;
    constructor(
        name: string = 'Entrez un nom',
        hp: number = 100,
        cp: number = 10,
        picture: string = 'xxx',
        types: string[] = ['Normal'],
        created: Date = new Date(),
    ) {
        this.name = name;
        this.hp = hp;
        this.cp = cp;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }
}