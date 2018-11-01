import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { INoteEsame } from 'app/shared/model/note-esame.model';

type EntityResponseType = HttpResponse<INoteEsame>;
type EntityArrayResponseType = HttpResponse<INoteEsame[]>;

@Injectable({ providedIn: 'root' })
export class NoteEsameService {
    public resourceUrl = SERVER_API_URL + 'api/note-esames';

    constructor(private http: HttpClient) {}

    create(noteEsame: INoteEsame): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(noteEsame);
        return this.http
            .post<INoteEsame>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    update(noteEsame: INoteEsame): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(noteEsame);
        return this.http
            .put<INoteEsame>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<INoteEsame>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<INoteEsame[]>(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    private convertDateFromClient(noteEsame: INoteEsame): INoteEsame {
        const copy: INoteEsame = Object.assign({}, noteEsame, {
            dataDispensa:
                noteEsame.dataDispensa != null && noteEsame.dataDispensa.isValid() ? noteEsame.dataDispensa.format(DATE_FORMAT) : null,
            dataCorsi: noteEsame.dataCorsi != null && noteEsame.dataCorsi.isValid() ? noteEsame.dataCorsi.format(DATE_FORMAT) : null,
            dataABI: noteEsame.dataABI != null && noteEsame.dataABI.isValid() ? noteEsame.dataABI.format(DATE_FORMAT) : null,
            dataRiepilogo:
                noteEsame.dataRiepilogo != null && noteEsame.dataRiepilogo.isValid() ? noteEsame.dataRiepilogo.format(DATE_FORMAT) : null,
            oraEsame: noteEsame.oraEsame != null && noteEsame.oraEsame.isValid() ? noteEsame.oraEsame.toJSON() : null
        });
        return copy;
    }

    private convertDateFromServer(res: EntityResponseType): EntityResponseType {
        res.body.dataDispensa = res.body.dataDispensa != null ? moment(res.body.dataDispensa) : null;
        res.body.dataCorsi = res.body.dataCorsi != null ? moment(res.body.dataCorsi) : null;
        res.body.dataABI = res.body.dataABI != null ? moment(res.body.dataABI) : null;
        res.body.dataRiepilogo = res.body.dataRiepilogo != null ? moment(res.body.dataRiepilogo) : null;
        res.body.oraEsame = res.body.oraEsame != null ? moment(res.body.oraEsame) : null;
        return res;
    }

    private convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        res.body.forEach((noteEsame: INoteEsame) => {
            noteEsame.dataDispensa = noteEsame.dataDispensa != null ? moment(noteEsame.dataDispensa) : null;
            noteEsame.dataCorsi = noteEsame.dataCorsi != null ? moment(noteEsame.dataCorsi) : null;
            noteEsame.dataABI = noteEsame.dataABI != null ? moment(noteEsame.dataABI) : null;
            noteEsame.dataRiepilogo = noteEsame.dataRiepilogo != null ? moment(noteEsame.dataRiepilogo) : null;
            noteEsame.oraEsame = noteEsame.oraEsame != null ? moment(noteEsame.oraEsame) : null;
        });
        return res;
    }
}
