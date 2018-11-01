import { Moment } from 'moment';

export interface IEsami {
    id?: number;
    data?: Moment;
    relEsamiSediSede?: string;
    relEsamiSediId?: number;
    relMatEsamiId?: number;
}

export class Esami implements IEsami {
    constructor(
        public id?: number,
        public data?: Moment,
        public relEsamiSediSede?: string,
        public relEsamiSediId?: number,
        public relMatEsamiId?: number
    ) {}
}
