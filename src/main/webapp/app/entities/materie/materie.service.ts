import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IMaterie } from 'app/shared/model/materie.model';

type EntityResponseType = HttpResponse<IMaterie>;
type EntityArrayResponseType = HttpResponse<IMaterie[]>;

@Injectable({ providedIn: 'root' })
export class MaterieService {
    public resourceUrl = SERVER_API_URL + 'api/materies';

    constructor(private http: HttpClient) {}

    create(materie: IMaterie): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(materie);
        return this.http
            .post<IMaterie>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    update(materie: IMaterie): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(materie);
        return this.http
            .put<IMaterie>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<IMaterie>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IMaterie[]>(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    private convertDateFromClient(materie: IMaterie): IMaterie {
        const copy: IMaterie = Object.assign({}, materie, {
            dataModifica: materie.dataModifica != null && materie.dataModifica.isValid() ? materie.dataModifica.format(DATE_FORMAT) : null
        });
        return copy;
    }

    private convertDateFromServer(res: EntityResponseType): EntityResponseType {
        res.body.dataModifica = res.body.dataModifica != null ? moment(res.body.dataModifica) : null;
        return res;
    }

    private convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        res.body.forEach((materie: IMaterie) => {
            materie.dataModifica = materie.dataModifica != null ? moment(materie.dataModifica) : null;
        });
        return res;
    }
}
