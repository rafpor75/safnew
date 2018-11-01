import { Moment } from 'moment';
import { ICdl } from 'app/shared/model//cdl.model';

export interface IFacolta {
    id?: number;
    nome?: string;
    dataModifica?: Moment;
    abilitato?: boolean;
    relFacCdls?: ICdl[];
}

export class Facolta implements IFacolta {
    constructor(
        public id?: number,
        public nome?: string,
        public dataModifica?: Moment,
        public abilitato?: boolean,
        public relFacCdls?: ICdl[]
    ) {
        this.abilitato = this.abilitato || false;
    }
}
