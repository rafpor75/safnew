import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IDocenti } from 'app/shared/model/docenti.model';
import { DocentiService } from './docenti.service';

@Component({
    selector: 'jhi-docenti-update',
    templateUrl: './docenti-update.component.html'
})
export class DocentiUpdateComponent implements OnInit {
    docenti: IDocenti;
    isSaving: boolean;

    constructor(private docentiService: DocentiService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ docenti }) => {
            this.docenti = docenti;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.docenti.id !== undefined) {
            this.subscribeToSaveResponse(this.docentiService.update(this.docenti));
        } else {
            this.subscribeToSaveResponse(this.docentiService.create(this.docenti));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IDocenti>>) {
        result.subscribe((res: HttpResponse<IDocenti>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
}
