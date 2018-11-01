import { Moment } from 'moment';

export interface INoteEsame {
    id?: number;
    appunti?: string;
    dataDispensa?: Moment;
    dataCorsi?: Moment;
    dataABI?: Moment;
    dataRiepilogo?: Moment;
    oraEsame?: Moment;
    costoEsame?: number;
    fasce?: string;
    piva?: string;
    fattura?: boolean;
    noteFattura?: string;
    emailInviata?: boolean;
    relNoteStudId?: number;
    relNoteEsamiId?: number;
}

export class NoteEsame implements INoteEsame {
    constructor(
        public id?: number,
        public appunti?: string,
        public dataDispensa?: Moment,
        public dataCorsi?: Moment,
        public dataABI?: Moment,
        public dataRiepilogo?: Moment,
        public oraEsame?: Moment,
        public costoEsame?: number,
        public fasce?: string,
        public piva?: string,
        public fattura?: boolean,
        public noteFattura?: string,
        public emailInviata?: boolean,
        public relNoteStudId?: number,
        public relNoteEsamiId?: number
    ) {
        this.fattura = this.fattura || false;
        this.emailInviata = this.emailInviata || false;
    }
}
