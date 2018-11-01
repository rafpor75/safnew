import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ISedi } from 'app/shared/model/sedi.model';
import { Principal } from 'app/core';
import { SediService } from './sedi.service';

@Component({
    selector: 'jhi-sedi',
    templateUrl: './sedi.component.html'
})
export class SediComponent implements OnInit, OnDestroy {
    sedis: ISedi[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private sediService: SediService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.sediService.query().subscribe(
            (res: HttpResponse<ISedi[]>) => {
                this.sedis = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInSedis();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ISedi) {
        return item.id;
    }

    registerChangeInSedis() {
        this.eventSubscriber = this.eventManager.subscribe('sediListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
