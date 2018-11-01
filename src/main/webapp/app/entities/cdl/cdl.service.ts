import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ICdl } from 'app/shared/model/cdl.model';

type EntityResponseType = HttpResponse<ICdl>;
type EntityArrayResponseType = HttpResponse<ICdl[]>;

@Injectable({ providedIn: 'root' })
export class CdlService {
    public resourceUrl = SERVER_API_URL + 'api/cdls';

    constructor(private http: HttpClient) {}

    create(cdl: ICdl): Observable<EntityResponseType> {
        return this.http.post<ICdl>(this.resourceUrl, cdl, { observe: 'response' });
    }

    update(cdl: ICdl): Observable<EntityResponseType> {
        return this.http.put<ICdl>(this.resourceUrl, cdl, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ICdl>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ICdl[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
