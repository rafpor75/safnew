import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { JhiAlertService } from 'ng-jhipster';

import { IStudenti } from 'app/shared/model/studenti.model';
import { StudentiService } from './studenti.service';
import { ICdl } from 'app/shared/model/cdl.model';
import { CdlService } from 'app/entities/cdl';

@Component({
    selector: 'jhi-studenti-update',
    templateUrl: './studenti-update.component.html'
})
export class StudentiUpdateComponent implements OnInit {
    studenti: IStudenti;
    isSaving: boolean;

    cdls: ICdl[];
    dataDiNascitaDp: any;
    dataModificaDp: any;

    constructor(
        private jhiAlertService: JhiAlertService,
        private studentiService: StudentiService,
        private cdlService: CdlService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ studenti }) => {
            this.studenti = studenti;
        });
        this.cdlService.query().subscribe(
            (res: HttpResponse<ICdl[]>) => {
                this.cdls = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.studenti.id !== undefined) {
            this.subscribeToSaveResponse(this.studentiService.update(this.studenti));
        } else {
            this.subscribeToSaveResponse(this.studentiService.create(this.studenti));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IStudenti>>) {
        result.subscribe((res: HttpResponse<IStudenti>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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
}
