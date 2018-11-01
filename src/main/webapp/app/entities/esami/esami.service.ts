import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IEsami } from 'app/shared/model/esami.model';

type EntityResponseType = HttpResponse<IEsami>;
type EntityArrayResponseType = HttpResponse<IEsami[]>;

@Injectable({ providedIn: 'root' })
export class EsamiService {
    public resourceUrl = SERVER_API_URL + 'api/esamis';

    constructor(private http: HttpClient) {}

    create(esami: IEsami): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(esami);
        return this.http
            .post<IEsami>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    update(esami: IEsami): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(esami);
        return this.http
            .put<IEsami>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<IEsami>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IEsami[]>(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    private convertDateFromClient(esami: IEsami): IEsami {
        const copy: IEsami = Object.assign({}, esami, {
            data: esami.data != null && esami.data.isValid() ? esami.data.format(DATE_FORMAT) : null
        });
        return copy;
    }

    private convertDateFromServer(res: EntityResponseType): EntityResponseType {
        res.body.data = res.body.data != null ? moment(res.body.data) : null;
        return res;
    }

    private convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        res.body.forEach((esami: IEsami) => {
            esami.data = esami.data != null ? moment(esami.data) : null;
        });
        return res;
    }
}
