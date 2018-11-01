import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiAlertService } from 'ng-jhipster';

import { INoteEsame } from 'app/shared/model/note-esame.model';
import { NoteEsameService } from './note-esame.service';
import { IStudenti } from 'app/shared/model/studenti.model';
import { StudentiService } from 'app/entities/studenti';
import { IEsami } from 'app/shared/model/esami.model';
import { EsamiService } from 'app/entities/esami';

@Component({
    selector: 'jhi-note-esame-update',
    templateUrl: './note-esame-update.component.html'
})
export class NoteEsameUpdateComponent implements OnInit {
    noteEsame: INoteEsame;
    isSaving: boolean;

    studentis: IStudenti[];

    esamis: IEsami[];
    dataDispensaDp: any;
    dataCorsiDp: any;
    dataABIDp: any;
    dataRiepilogoDp: any;
    oraEsame: string;

    constructor(
        private jhiAlertService: JhiAlertService,
        private noteEsameService: NoteEsameService,
        private studentiService: StudentiService,
        private esamiService: EsamiService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ noteEsame }) => {
            this.noteEsame = noteEsame;
            this.oraEsame = this.noteEsame.oraEsame != null ? this.noteEsame.oraEsame.format(DATE_TIME_FORMAT) : null;
        });
        this.studentiService.query().subscribe(
            (res: HttpResponse<IStudenti[]>) => {
                this.studentis = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.esamiService.query().subscribe(
            (res: HttpResponse<IEsami[]>) => {
                this.esamis = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.noteEsame.oraEsame = this.oraEsame != null ? moment(this.oraEsame, DATE_TIME_FORMAT) : null;
        if (this.noteEsame.id !== undefined) {
            this.subscribeToSaveResponse(this.noteEsameService.update(this.noteEsame));
        } else {
            this.subscribeToSaveResponse(this.noteEsameService.create(this.noteEsame));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<INoteEsame>>) {
        result.subscribe((res: HttpResponse<INoteEsame>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackStudentiById(index: number, item: IStudenti) {
        return item.id;
    }

    trackEsamiById(index: number, item: IEsami) {
        return item.id;
    }
}
