import { IMaterie } from 'app/shared/model//materie.model';

export interface IDocenti {
    id?: number;
    nome?: string;
    cognome?: string;
    email?: string;
    abilitato?: boolean;
    relDocMats?: IMaterie[];
}

export class Docenti implements IDocenti {
    constructor(
        public id?: number,
        public nome?: string,
        public cognome?: string,
        public email?: string,
        public abilitato?: boolean,
        public relDocMats?: IMaterie[]
    ) {
        this.abilitato = this.abilitato || false;
    }
}
