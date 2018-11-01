import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { INoteEsame } from 'app/shared/model/note-esame.model';

@Component({
    selector: 'jhi-note-esame-detail',
    templateUrl: './note-esame-detail.component.html'
})
export class NoteEsameDetailComponent implements OnInit {
    noteEsame: INoteEsame;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ noteEsame }) => {
            this.noteEsame = noteEsame;
        });
    }

    previousState() {
        window.history.back();
    }
}
