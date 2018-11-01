import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IFacolta } from 'app/shared/model/facolta.model';

type EntityResponseType = HttpResponse<IFacolta>;
type EntityArrayResponseType = HttpResponse<IFacolta[]>;

@Injectable({ providedIn: 'root' })
export class FacoltaService {
    public resourceUrl = SERVER_API_URL + 'api/facoltas';

    constructor(private http: HttpClient) {}

    create(facolta: IFacolta): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(facolta);
        return this.http
            .post<IFacolta>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    update(facolta: IFacolta): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(facolta);
        return this.http
            .put<IFacolta>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<IFacolta>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IFacolta[]>(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    private convertDateFromClient(facolta: IFacolta): IFacolta {
        const copy: IFacolta = Object.assign({}, facolta, {
            dataModifica: facolta.dataModifica != null && facolta.dataModifica.isValid() ? facolta.dataModifica.format(DATE_FORMAT) : null
        });
        return copy;
    }

    private convertDateFromServer(res: EntityResponseType): EntityResponseType {
        res.body.dataModifica = res.body.dataModifica != null ? moment(res.body.dataModifica) : null;
        return res;
    }

    private convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        res.body.forEach((facolta: IFacolta) => {
            facolta.dataModifica = facolta.dataModifica != null ? moment(facolta.dataModifica) : null;
        });
        return res;
    }
}
