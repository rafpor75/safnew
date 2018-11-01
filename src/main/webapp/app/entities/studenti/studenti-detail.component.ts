import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IStudenti } from 'app/shared/model/studenti.model';

@Component({
    selector: 'jhi-studenti-detail',
    templateUrl: './studenti-detail.component.html'
})
export class StudentiDetailComponent implements OnInit {
    studenti: IStudenti;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ studenti }) => {
            this.studenti = studenti;
        });
    }

    previousState() {
        window.history.back();
    }
}
