import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { JhiAlertService } from 'ng-jhipster';

import { IEsami } from 'app/shared/model/esami.model';
import { EsamiService } from './esami.service';
import { ISedi } from 'app/shared/model/sedi.model';
import { SediService } from 'app/entities/sedi';
import { IMaterie } from 'app/shared/model/materie.model';
import { MaterieService } from 'app/entities/materie';

@Component({
    selector: 'jhi-esami-update',
    templateUrl: './esami-update.component.html'
})
export class EsamiUpdateComponent implements OnInit {
    esami: IEsami;
    isSaving: boolean;

    relesamisedis: ISedi[];

    materies: IMaterie[];
    dataDp: any;

    constructor(
        private jhiAlertService: JhiAlertService,
        private esamiService: EsamiService,
        private sediService: SediService,
        private materieService: MaterieService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ esami }) => {
            this.esami = esami;
        });
        this.sediService.query({ filter: 'esami-is-null' }).subscribe(
            (res: HttpResponse<ISedi[]>) => {
                if (!this.esami.relEsamiSediId) {
                    this.relesamisedis = res.body;
                } else {
                    this.sediService.find(this.esami.relEsamiSediId).subscribe(
                        (subRes: HttpResponse<ISedi>) => {
                            this.relesamisedis = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.materieService.query().subscribe(
            (res: HttpResponse<IMaterie[]>) => {
                this.materies = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.esami.id !== undefined) {
            this.subscribeToSaveResponse(this.esamiService.update(this.esami));
        } else {
            this.subscribeToSaveResponse(this.esamiService.create(this.esami));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IEsami>>) {
        result.subscribe((res: HttpResponse<IEsami>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackSediById(index: number, item: ISedi) {
        return item.id;
    }

    trackMaterieById(index: number, item: IMaterie) {
        return item.id;
    }
}
