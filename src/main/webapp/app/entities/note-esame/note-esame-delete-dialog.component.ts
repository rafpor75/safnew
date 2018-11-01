import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { INoteEsame } from 'app/shared/model/note-esame.model';
import { NoteEsameService } from './note-esame.service';

@Component({
    selector: 'jhi-note-esame-delete-dialog',
    templateUrl: './note-esame-delete-dialog.component.html'
})
export class NoteEsameDeleteDialogComponent {
    noteEsame: INoteEsame;

    constructor(private noteEsameService: NoteEsameService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.noteEsameService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'noteEsameListModification',
                content: 'Deleted an noteEsame'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-note-esame-delete-popup',
    template: ''
})
export class NoteEsameDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ noteEsame }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(NoteEsameDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
                this.ngbModalRef.componentInstance.noteEsame = noteEsame;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
