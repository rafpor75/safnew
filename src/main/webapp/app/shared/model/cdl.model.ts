import { IMaterie } from 'app/shared/model//materie.model';

export interface ICdl {
    id?: number;
    codice?: string;
    nome?: string;
    abilitato?: boolean;
    relCdlMats?: IMaterie[];
    relCdlsFacNome?: string;
    relCdlsFacId?: number;
}

export class Cdl implements ICdl {
    constructor(
        public id?: number,
        public codice?: string,
        public nome?: string,
        public abilitato?: boolean,
        public relCdlMats?: IMaterie[],
        public relCdlsFacNome?: string,
        public relCdlsFacId?: number
    ) {
        this.abilitato = this.abilitato || false;
    }
}
