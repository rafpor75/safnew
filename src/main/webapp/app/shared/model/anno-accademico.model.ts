export interface IAnnoAccademico {
    id?: number;
    descrizione?: string;
}

export class AnnoAccademico implements IAnnoAccademico {
    constructor(public id?: number, public descrizione?: string) {}
}
