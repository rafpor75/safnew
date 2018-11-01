import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { ICdl } from 'app/shared/model/cdl.model';
import { CdlService } from './cdl.service';
import { IFacolta } from 'app/shared/model/facolta.model';
import { FacoltaService } from 'app/entities/facolta';

@Component({
    selector: 'jhi-cdl-update',
    templateUrl: './cdl-update.component.html'
})
export class CdlUpdateComponent implements OnInit {
    cdl: ICdl;
    isSaving: boolean;

    facoltas: IFacolta[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private cdlService: CdlService,
        private facoltaService: FacoltaService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ cdl }) => {
            this.cdl = cdl;
        });
        this.facoltaService.query().subscribe(
            (res: HttpResponse<IFacolta[]>) => {
                this.facoltas = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.cdl.id !== undefined) {
            this.subscribeToSaveResponse(this.cdlService.update(this.cdl));
        } else {
            this.subscribeToSaveResponse(this.cdlService.create(this.cdl));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ICdl>>) {
        result.subscribe((res: HttpResponse<ICdl>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackFacoltaById(index: number, item: IFacolta) {
        return item.id;
    }
}
