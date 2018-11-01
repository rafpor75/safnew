/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { SafnewTestModule } from '../../../test.module';
import { MaterieDeleteDialogComponent } from 'app/entities/materie/materie-delete-dialog.component';
import { MaterieService } from 'app/entities/materie/materie.service';

describe('Component Tests', () => {
    describe('Materie Management Delete Component', () => {
        let comp: MaterieDeleteDialogComponent;
        let fixture: ComponentFixture<MaterieDeleteDialogComponent>;
        let service: MaterieService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SafnewTestModule],
                declarations: [MaterieDeleteDialogComponent]
            })
                .overrideTemplate(MaterieDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(MaterieDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MaterieService);
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
