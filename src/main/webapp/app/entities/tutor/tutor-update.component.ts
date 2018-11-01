import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITutor } from 'app/shared/model/tutor.model';
import { TutorService } from './tutor.service';

@Component({
    selector: 'jhi-tutor-update',
    templateUrl: './tutor-update.component.html'
})
export class TutorUpdateComponent implements OnInit {
    tutor: ITutor;
    isSaving: boolean;

    constructor(private tutorService: TutorService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ tutor }) => {
            this.tutor = tutor;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.tutor.id !== undefined) {
            this.subscribeToSaveResponse(this.tutorService.update(this.tutor));
        } else {
            this.subscribeToSaveResponse(this.tutorService.create(this.tutor));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ITutor>>) {
        result.subscribe((res: HttpResponse<ITutor>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
}
