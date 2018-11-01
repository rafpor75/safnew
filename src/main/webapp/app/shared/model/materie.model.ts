import { Moment } from 'moment';

export interface IMaterie {
    id?: number;
    nome?: string;
    cfu?: number;
    abilitato?: boolean;
    dataModifica?: Moment;
    relMatsCdlNome?: string;
    relMatsCdlId?: number;
    relMatsTutCognome?: string;
    relMatsTutId?: number;
    relMatsDocCognome?: string;
    relMatsDocId?: number;
}

export class Materie implements IMaterie {
    constructor(
        public id?: number,
        public nome?: string,
        public cfu?: number,
        public abilitato?: boolean,
        public dataModifica?: Moment,
        public relMatsCdlNome?: string,
        public relMatsCdlId?: number,
        public relMatsTutCognome?: string,
        public relMatsTutId?: number,
        public relMatsDocCognome?: string,
        public relMatsDocId?: number
    ) {
        this.abilitato = this.abilitato || false;
    }
}
