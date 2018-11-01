import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IAnnoAccademico } from 'app/shared/model/anno-accademico.model';

@Component({
    selector: 'jhi-anno-accademico-detail',
    templateUrl: './anno-accademico-detail.component.html'
})
export class AnnoAccademicoDetailComponent implements OnInit {
    annoAccademico: IAnnoAccademico;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ annoAccademico }) => {
            this.annoAccademico = annoAccademico;
        });
    }

    previousState() {
        window.history.back();
    }
}
