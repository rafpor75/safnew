import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IAnnoAccademico } from 'app/shared/model/anno-accademico.model';
import { AnnoAccademicoService } from './anno-accademico.service';

@Component({
    selector: 'jhi-anno-accademico-delete-dialog',
    templateUrl: './anno-accademico-delete-dialog.component.html'
})
export class AnnoAccademicoDeleteDialogComponent {
    annoAccademico: IAnnoAccademico;

    constructor(
        private annoAccademicoService: AnnoAccademicoService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.annoAccademicoService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'annoAccademicoListModification',
                content: 'Deleted an annoAccademico'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-anno-accademico-delete-popup',
    template: ''
})
export class AnnoAccademicoDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ annoAccademico }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(AnnoAccademicoDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.annoAccademico = annoAccademico;
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
