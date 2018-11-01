import { Moment } from 'moment';
import { IMaterie } from 'app/shared/model//materie.model';

export interface IPianiDiStudio {
    id?: number;
    abilitato?: boolean;
    dataModifica?: Moment;
    relAnnoAccademicoId?: number;
    relPdsCdlId?: number;
    relPdsMats?: IMaterie[];
}

export class PianiDiStudio implements IPianiDiStudio {
    constructor(
        public id?: number,
        public abilitato?: boolean,
        public dataModifica?: Moment,
        public relAnnoAccademicoId?: number,
        public relPdsCdlId?: number,
        public relPdsMats?: IMaterie[]
    ) {
        this.abilitato = this.abilitato || false;
    }
}
