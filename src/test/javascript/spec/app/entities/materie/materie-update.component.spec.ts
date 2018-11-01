/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { SafnewTestModule } from '../../../test.module';
import { MaterieUpdateComponent } from 'app/entities/materie/materie-update.component';
import { MaterieService } from 'app/entities/materie/materie.service';
import { Materie } from 'app/shared/model/materie.model';

describe('Component Tests', () => {
    describe('Materie Management Update Component', () => {
        let comp: MaterieUpdateComponent;
        let fixture: ComponentFixture<MaterieUpdateComponent>;
        let service: MaterieService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SafnewTestModule],
                declarations: [MaterieUpdateComponent]
            })
                .overrideTemplate(MaterieUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(MaterieUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MaterieService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Materie(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.materie = entity;
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
                    const entity = new Materie();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.materie = entity;
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
