/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { SafnewTestModule } from '../../../test.module';
import { PianiDiStudioDeleteDialogComponent } from 'app/entities/piani-di-studio/piani-di-studio-delete-dialog.component';
import { PianiDiStudioService } from 'app/entities/piani-di-studio/piani-di-studio.service';

describe('Component Tests', () => {
    describe('PianiDiStudio Management Delete Component', () => {
        let comp: PianiDiStudioDeleteDialogComponent;
        let fixture: ComponentFixture<PianiDiStudioDeleteDialogComponent>;
        let service: PianiDiStudioService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SafnewTestModule],
                declarations: [PianiDiStudioDeleteDialogComponent]
            })
                .overrideTemplate(PianiDiStudioDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(PianiDiStudioDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(PianiDiStudioService);
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
