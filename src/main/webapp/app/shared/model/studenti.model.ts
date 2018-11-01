import { Moment } from 'moment';

export interface IStudenti {
    id?: number;
    nome?: string;
    cognome?: string;
    email?: string;
    telefono?: string;
    indirizzo?: string;
    citta?: string;
    provincia?: string;
    stato?: string;
    cap?: string;
    dataDiNascita?: Moment;
    luogoDiNascita?: string;
    matricola?: string;
    tempoParziale?: boolean;
    abilitato?: boolean;
    dataModifica?: Moment;
    relStuCdlId?: number;
}

export class Studenti implements IStudenti {
    constructor(
        public id?: number,
        public nome?: string,
        public cognome?: string,
        public email?: string,
        public telefono?: string,
        public indirizzo?: string,
        public citta?: string,
        public provincia?: string,
        public stato?: string,
        public cap?: string,
        public dataDiNascita?: Moment,
        public luogoDiNascita?: string,
        public matricola?: string,
        public tempoParziale?: boolean,
        public abilitato?: boolean,
        public dataModifica?: Moment,
        public relStuCdlId?: number
    ) {
        this.tempoParziale = this.tempoParziale || false;
        this.abilitato = this.abilitato || false;
    }
}
