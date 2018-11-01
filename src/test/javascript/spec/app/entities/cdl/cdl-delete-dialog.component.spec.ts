/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { SafnewTestModule } from '../../../test.module';
import { CdlDeleteDialogComponent } from 'app/entities/cdl/cdl-delete-dialog.component';
import { CdlService } from 'app/entities/cdl/cdl.service';

describe('Component Tests', () => {
    describe('Cdl Management Delete Component', () => {
        let comp: CdlDeleteDialogComponent;
        let fixture: ComponentFixture<CdlDeleteDialogComponent>;
        let service: CdlService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SafnewTestModule],
                declarations: [CdlDeleteDialogComponent]
            })
                .overrideTemplate(CdlDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(CdlDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CdlService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
