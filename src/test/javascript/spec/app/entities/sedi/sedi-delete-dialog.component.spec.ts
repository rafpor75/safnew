/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { SafnewTestModule } from '../../../test.module';
import { SediDeleteDialogComponent } from 'app/entities/sedi/sedi-delete-dialog.component';
import { SediService } from 'app/entities/sedi/sedi.service';

describe('Component Tests', () => {
    describe('Sedi Management Delete Component', () => {
        let comp: SediDeleteDialogComponent;
        let fixture: ComponentFixture<SediDeleteDialogComponent>;
        let service: SediService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SafnewTestModule],
                declarations: [SediDeleteDialogComponent]
            })
                .overrideTemplate(SediDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(SediDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SediService);
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
