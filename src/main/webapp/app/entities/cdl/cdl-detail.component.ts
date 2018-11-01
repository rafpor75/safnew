import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICdl } from 'app/shared/model/cdl.model';

@Component({
    selector: 'jhi-cdl-detail',
    templateUrl: './cdl-detail.component.html'
})
export class CdlDetailComponent implements OnInit {
    cdl: ICdl;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ cdl }) => {
            this.cdl = cdl;
        });
    }

    previousState() {
        window.history.back();
    }
}
