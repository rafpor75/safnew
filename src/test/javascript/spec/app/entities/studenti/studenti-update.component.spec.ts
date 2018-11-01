/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { SafnewTestModule } from '../../../test.module';
import { StudentiUpdateComponent } from 'app/entities/studenti/studenti-update.component';
import { StudentiService } from 'app/entities/studenti/studenti.service';
import { Studenti } from 'app/shared/model/studenti.model';

describe('Component Tests', () => {
    describe('Studenti Management Update Component', () => {
        let comp: StudentiUpdateComponent;
        let fixture: ComponentFixture<StudentiUpdateComponent>;
        let service: StudentiService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SafnewTestModule],
                declarations: [StudentiUpdateComponent]
            })
                .overrideTemplate(StudentiUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(StudentiUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(StudentiService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Studenti(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.studenti = entity;
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
                    const entity = new Studenti();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.studenti = entity;
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
