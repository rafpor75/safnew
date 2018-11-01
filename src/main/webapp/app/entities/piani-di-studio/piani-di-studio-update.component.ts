import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { JhiAlertService } from 'ng-jhipster';

import { IPianiDiStudio } from 'app/shared/model/piani-di-studio.model';
import { PianiDiStudioService } from './piani-di-studio.service';
import { IAnnoAccademico } from 'app/shared/model/anno-accademico.model';
import { AnnoAccademicoService } from 'app/entities/anno-accademico';
import { ICdl } from 'app/shared/model/cdl.model';
import { CdlService } from 'app/entities/cdl';
import { IMaterie } from 'app/shared/model/materie.model';
import { MaterieService } from 'app/entities/materie';

@Component({
    selector: 'jhi-piani-di-studio-update',
    templateUrl: './piani-di-studio-update.component.html'
})
export class PianiDiStudioUpdateComponent implements OnInit {
    pianiDiStudio: IPianiDiStudio;
    isSaving: boolean;

    annoaccademicos: IAnnoAccademico[];

    cdls: ICdl[];

    materies: IMaterie[];
    dataModificaDp: any;

    constructor(
        private jhiAlertService: JhiAlertService,
        private pianiDiStudioService: PianiDiStudioService,
        private annoAccademicoService: AnnoAccademicoService,
        private cdlService: CdlService,
        private materieService: MaterieService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ pianiDiStudio }) => {
            this.pianiDiStudio = pianiDiStudio;
        });
        this.annoAccademicoService.query().subscribe(
            (res: HttpResponse<IAnnoAccademico[]>) => {
                this.annoaccademicos = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.cdlService.query().subscribe(
            (res: HttpResponse<ICdl[]>) => {
                this.cdls = res.body;
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
        if (this.pianiDiStudio.id !== undefined) {
            this.subscribeToSaveResponse(this.pianiDiStudioService.update(this.pianiDiStudio));
        } else {
            this.subscribeToSaveResponse(this.pianiDiStudioService.create(this.pianiDiStudio));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IPianiDiStudio>>) {
        result.subscribe((res: HttpResponse<IPianiDiStudio>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackAnnoAccademicoById(index: number, item: IAnnoAccademico) {
        return item.id;
    }

    trackCdlById(index: number, item: ICdl) {
        return item.id;
    }

    trackMaterieById(index: number, item: IMaterie) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
}
