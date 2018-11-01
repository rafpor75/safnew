import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IAnnoAccademico } from 'app/shared/model/anno-accademico.model';

type EntityResponseType = HttpResponse<IAnnoAccademico>;
type EntityArrayResponseType = HttpResponse<IAnnoAccademico[]>;

@Injectable({ providedIn: 'root' })
export class AnnoAccademicoService {
    public resourceUrl = SERVER_API_URL + 'api/anno-accademicos';

    constructor(private http: HttpClient) {}

    create(annoAccademico: IAnnoAccademico): Observable<EntityResponseType> {
        return this.http.post<IAnnoAccademico>(this.resourceUrl, annoAccademico, { observe: 'response' });
    }

    update(annoAccademico: IAnnoAccademico): Observable<EntityResponseType> {
        return this.http.put<IAnnoAccademico>(this.resourceUrl, annoAccademico, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IAnnoAccademico>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IAnnoAccademico[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
