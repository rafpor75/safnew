import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IAnnoAccademico } from 'app/shared/model/anno-accademico.model';
import { Principal } from 'app/core';
import { AnnoAccademicoService } from './anno-accademico.service';

@Component({
    selector: 'jhi-anno-accademico',
    templateUrl: './anno-accademico.component.html'
})
export class AnnoAccademicoComponent implements OnInit, OnDestroy {
    annoAccademicos: IAnnoAccademico[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private annoAccademicoService: AnnoAccademicoService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.annoAccademicoService.query().subscribe(
            (res: HttpResponse<IAnnoAccademico[]>) => {
                this.annoAccademicos = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInAnnoAccademicos();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IAnnoAccademico) {
        return item.id;
    }

    registerChangeInAnnoAccademicos() {
        this.eventSubscriber = this.eventManager.subscribe('annoAccademicoListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
