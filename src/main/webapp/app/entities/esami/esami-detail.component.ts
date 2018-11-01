import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IEsami } from 'app/shared/model/esami.model';

@Component({
    selector: 'jhi-esami-detail',
    templateUrl: './esami-detail.component.html'
})
export class EsamiDetailComponent implements OnInit {
    esami: IEsami;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ esami }) => {
            this.esami = esami;
        });
    }

    previousState() {
        window.history.back();
    }
}
