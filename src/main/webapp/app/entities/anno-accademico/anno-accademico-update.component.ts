import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IAnnoAccademico } from 'app/shared/model/anno-accademico.model';
import { AnnoAccademicoService } from './anno-accademico.service';

@Component({
    selector: 'jhi-anno-accademico-update',
    templateUrl: './anno-accademico-update.component.html'
})
export class AnnoAccademicoUpdateComponent implements OnInit {
    annoAccademico: IAnnoAccademico;
    isSaving: boolean;

    constructor(private annoAccademicoService: AnnoAccademicoService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ annoAccademico }) => {
            this.annoAccademico = annoAccademico;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.annoAccademico.id !== undefined) {
            this.subscribeToSaveResponse(this.annoAccademicoService.update(this.annoAccademico));
        } else {
            this.subscribeToSaveResponse(this.annoAccademicoService.create(this.annoAccademico));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IAnnoAccademico>>) {
        result.subscribe((res: HttpResponse<IAnnoAccademico>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
}
