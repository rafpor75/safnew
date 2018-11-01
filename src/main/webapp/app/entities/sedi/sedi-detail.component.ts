import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISedi } from 'app/shared/model/sedi.model';

@Component({
    selector: 'jhi-sedi-detail',
    templateUrl: './sedi-detail.component.html'
})
export class SediDetailComponent implements OnInit {
    sedi: ISedi;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ sedi }) => {
            this.sedi = sedi;
        });
    }

    previousState() {
        window.history.back();
    }
}
