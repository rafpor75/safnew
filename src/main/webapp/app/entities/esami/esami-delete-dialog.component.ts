import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IEsami } from 'app/shared/model/esami.model';
import { EsamiService } from './esami.service';

@Component({
    selector: 'jhi-esami-delete-dialog',
    templateUrl: './esami-delete-dialog.component.html'
})
export class EsamiDeleteDialogComponent {
    esami: IEsami;

    constructor(private esamiService: EsamiService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.esamiService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'esamiListModification',
                content: 'Deleted an esami'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-esami-delete-popup',
    template: ''
})
export class EsamiDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ esami }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(EsamiDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
                this.ngbModalRef.componentInstance.esami = esami;
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
