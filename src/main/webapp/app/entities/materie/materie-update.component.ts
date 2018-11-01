import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { JhiAlertService } from 'ng-jhipster';

import { IMaterie } from 'app/shared/model/materie.model';
import { MaterieService } from './materie.service';
import { ICdl } from 'app/shared/model/cdl.model';
import { CdlService } from 'app/entities/cdl';
import { ITutor } from 'app/shared/model/tutor.model';
import { TutorService } from 'app/entities/tutor';
import { IDocenti } from 'app/shared/model/docenti.model';
import { DocentiService } from 'app/entities/docenti';

@Component({
    selector: 'jhi-materie-update',
    templateUrl: './materie-update.component.html'
})
export class MaterieUpdateComponent implements OnInit {
    materie: IMaterie;
    isSaving: boolean;

    cdls: ICdl[];

    tutors: ITutor[];

    docentis: IDocenti[];
    dataModificaDp: any;

    constructor(
        private jhiAlertService: JhiAlertService,
        private materieService: MaterieService,
        private cdlService: CdlService,
        private tutorService: TutorService,
        private docentiService: DocentiService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ materie }) => {
            this.materie = materie;
        });
        this.cdlService.query().subscribe(
            (res: HttpResponse<ICdl[]>) => {
                this.cdls = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.tutorService.query().subscribe(
            (res: HttpResponse<ITutor[]>) => {
                this.tutors = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.docentiService.query().subscribe(
            (res: HttpResponse<IDocenti[]>) => {
                this.docentis = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.materie.id !== undefined) {
            this.subscribeToSaveResponse(this.materieService.update(this.materie));
        } else {
            this.subscribeToSaveResponse(this.materieService.create(this.materie));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IMaterie>>) {
        result.subscribe((res: HttpResponse<IMaterie>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackCdlById(index: number, item: ICdl) {
        return item.id;
    }

    trackTutorById(index: number, item: ITutor) {
        return item.id;
    }

    trackDocentiById(index: number, item: IDocenti) {
        return item.id;
    }
}
