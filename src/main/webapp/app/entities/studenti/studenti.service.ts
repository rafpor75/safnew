import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IStudenti } from 'app/shared/model/studenti.model';

type EntityResponseType = HttpResponse<IStudenti>;
type EntityArrayResponseType = HttpResponse<IStudenti[]>;

@Injectable({ providedIn: 'root' })
export class StudentiService {
    public resourceUrl = SERVER_API_URL + 'api/studentis';

    constructor(private http: HttpClient) {}

    create(studenti: IStudenti): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(studenti);
        return this.http
            .post<IStudenti>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    update(studenti: IStudenti): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(studenti);
        return this.http
            .put<IStudenti>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<IStudenti>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IStudenti[]>(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    private convertDateFromClient(studenti: IStudenti): IStudenti {
        const copy: IStudenti = Object.assign({}, studenti, {
            dataDiNascita:
                studenti.dataDiNascita != null && studenti.dataDiNascita.isValid() ? studenti.dataDiNascita.format(DATE_FORMAT) : null,
            dataModifica:
                studenti.dataModifica != null && studenti.dataModifica.isValid() ? studenti.dataModifica.format(DATE_FORMAT) : null
        });
        return copy;
    }

    private convertDateFromServer(res: EntityResponseType): EntityResponseType {
        res.body.dataDiNascita = res.body.dataDiNascita != null ? moment(res.body.dataDiNascita) : null;
        res.body.dataModifica = res.body.dataModifica != null ? moment(res.body.dataModifica) : null;
        return res;
    }

    private convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        res.body.forEach((studenti: IStudenti) => {
            studenti.dataDiNascita = studenti.dataDiNascita != null ? moment(studenti.dataDiNascita) : null;
            studenti.dataModifica = studenti.dataModifica != null ? moment(studenti.dataModifica) : null;
        });
        return res;
    }
}
