/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { SafnewTestModule } from '../../../test.module';
import { PianiDiStudioUpdateComponent } from 'app/entities/piani-di-studio/piani-di-studio-update.component';
import { PianiDiStudioService } from 'app/entities/piani-di-studio/piani-di-studio.service';
import { PianiDiStudio } from 'app/shared/model/piani-di-studio.model';

describe('Component Tests', () => {
    describe('PianiDiStudio Management Update Component', () => {
        let comp: PianiDiStudioUpdateComponent;
        let fixture: ComponentFixture<PianiDiStudioUpdateComponent>;
        let service: PianiDiStudioService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SafnewTestModule],
                declarations: [PianiDiStudioUpdateComponent]
            })
                .overrideTemplate(PianiDiStudioUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(PianiDiStudioUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(PianiDiStudioService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new PianiDiStudio(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.pianiDiStudio = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it(
                'Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new PianiDiStudio();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.pianiDiStudio = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});
