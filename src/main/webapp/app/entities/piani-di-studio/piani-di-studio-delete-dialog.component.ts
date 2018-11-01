import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IPianiDiStudio } from 'app/shared/model/piani-di-studio.model';
import { PianiDiStudioService } from './piani-di-studio.service';

@Component({
    selector: 'jhi-piani-di-studio-delete-dialog',
    templateUrl: './piani-di-studio-delete-dialog.component.html'
})
export class PianiDiStudioDeleteDialogComponent {
    pianiDiStudio: IPianiDiStudio;

    constructor(
        private pianiDiStudioService: PianiDiStudioService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.pianiDiStudioService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'pianiDiStudioListModification',
                content: 'Deleted an pianiDiStudio'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-piani-di-studio-delete-popup',
    template: ''
})
export class PianiDiStudioDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ pianiDiStudio }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(PianiDiStudioDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.pianiDiStudio = pianiDiStudio;
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
