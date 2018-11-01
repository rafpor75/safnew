import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ISedi } from 'app/shared/model/sedi.model';

type EntityResponseType = HttpResponse<ISedi>;
type EntityArrayResponseType = HttpResponse<ISedi[]>;

@Injectable({ providedIn: 'root' })
export class SediService {
    public resourceUrl = SERVER_API_URL + 'api/sedis';

    constructor(private http: HttpClient) {}

    create(sedi: ISedi): Observable<EntityResponseType> {
        return this.http.post<ISedi>(this.resourceUrl, sedi, { observe: 'response' });
    }

    update(sedi: ISedi): Observable<EntityResponseType> {
        return this.http.put<ISedi>(this.resourceUrl, sedi, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ISedi>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ISedi[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
