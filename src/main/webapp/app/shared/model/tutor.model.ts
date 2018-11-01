import { IMaterie } from 'app/shared/model//materie.model';

export interface ITutor {
    id?: number;
    nome?: string;
    cognome?: string;
    email?: string;
    abilitato?: boolean;
    relTutMats?: IMaterie[];
}

export class Tutor implements ITutor {
    constructor(
        public id?: number,
        public nome?: string,
        public cognome?: string,
        public email?: string,
        public abilitato?: boolean,
        public relTutMats?: IMaterie[]
    ) {
        this.abilitato = this.abilitato || false;
    }
}
