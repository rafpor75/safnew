import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IDocenti } from 'app/shared/model/docenti.model';

type EntityResponseType = HttpResponse<IDocenti>;
type EntityArrayResponseType = HttpResponse<IDocenti[]>;

@Injectable({ providedIn: 'root' })
export class DocentiService {
    public resourceUrl = SERVER_API_URL + 'api/docentis';

    constructor(private http: HttpClient) {}

    create(docenti: IDocenti): Observable<EntityResponseType> {
        return this.http.post<IDocenti>(this.resourceUrl, docenti, { observe: 'response' });
    }

    update(docenti: IDocenti): Observable<EntityResponseType> {
        return this.http.put<IDocenti>(this.resourceUrl, docenti, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IDocenti>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IDocenti[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
