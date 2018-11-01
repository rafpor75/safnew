import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IPianiDiStudio } from 'app/shared/model/piani-di-studio.model';

type EntityResponseType = HttpResponse<IPianiDiStudio>;
type EntityArrayResponseType = HttpResponse<IPianiDiStudio[]>;

@Injectable({ providedIn: 'root' })
export class PianiDiStudioService {
    public resourceUrl = SERVER_API_URL + 'api/piani-di-studios';

    constructor(private http: HttpClient) {}

    create(pianiDiStudio: IPianiDiStudio): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(pianiDiStudio);
        return this.http
            .post<IPianiDiStudio>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    update(pianiDiStudio: IPianiDiStudio): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(pianiDiStudio);
        return this.http
            .put<IPianiDiStudio>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<IPianiDiStudio>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IPianiDiStudio[]>(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    private convertDateFromClient(pianiDiStudio: IPianiDiStudio): IPianiDiStudio {
        const copy: IPianiDiStudio = Object.assign({}, pianiDiStudio, {
            dataModifica:
                pianiDiStudio.dataModifica != null && pianiDiStudio.dataModifica.isValid()
                    ? pianiDiStudio.dataModifica.format(DATE_FORMAT)
                    : null
        });
        return copy;
    }

    private convertDateFromServer(res: EntityResponseType): EntityResponseType {
        res.body.dataModifica = res.body.dataModifica != null ? moment(res.body.dataModifica) : null;
        return res;
    }

    private convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        res.body.forEach((pianiDiStudio: IPianiDiStudio) => {
            pianiDiStudio.dataModifica = pianiDiStudio.dataModifica != null ? moment(pianiDiStudio.dataModifica) : null;
        });
        return res;
    }
}
