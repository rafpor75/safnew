import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPianiDiStudio } from 'app/shared/model/piani-di-studio.model';

@Component({
    selector: 'jhi-piani-di-studio-detail',
    templateUrl: './piani-di-studio-detail.component.html'
})
export class PianiDiStudioDetailComponent implements OnInit {
    pianiDiStudio: IPianiDiStudio;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ pianiDiStudio }) => {
            this.pianiDiStudio = pianiDiStudio;
        });
    }

    previousState() {
        window.history.back();
    }
}
