export interface ISedi {
    id?: number;
    sede?: string;
}

export class Sedi implements ISedi {
    constructor(public id?: number, public sede?: string) {}
}
