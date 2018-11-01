import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IDocenti } from 'app/shared/model/docenti.model';

@Component({
    selector: 'jhi-docenti-detail',
    templateUrl: './docenti-detail.component.html'
})
export class DocentiDetailComponent implements OnInit {
    docenti: IDocenti;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ docenti }) => {
            this.docenti = docenti;
        });
    }

    previousState() {
        window.history.back();
    }
}
