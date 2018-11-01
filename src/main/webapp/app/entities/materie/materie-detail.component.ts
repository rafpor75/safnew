import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IMaterie } from 'app/shared/model/materie.model';

@Component({
    selector: 'jhi-materie-detail',
    templateUrl: './materie-detail.component.html'
})
export class MaterieDetailComponent implements OnInit {
    materie: IMaterie;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ materie }) => {
            this.materie = materie;
        });
    }

    previousState() {
        window.history.back();
    }
}
