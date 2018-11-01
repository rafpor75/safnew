import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ISedi } from 'app/shared/model/sedi.model';
import { SediService } from './sedi.service';

@Component({
    selector: 'jhi-sedi-update',
    templateUrl: './sedi-update.component.html'
})
export class SediUpdateComponent implements OnInit {
    sedi: ISedi;
    isSaving: boolean;

    constructor(private sediService: SediService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ sedi }) => {
            this.sedi = sedi;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.sedi.id !== undefined) {
            this.subscribeToSaveResponse(this.sediService.update(this.sedi));
        } else {
            this.subscribeToSaveResponse(this.sediService.create(this.sedi));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ISedi>>) {
        result.subscribe((res: HttpResponse<ISedi>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
}
