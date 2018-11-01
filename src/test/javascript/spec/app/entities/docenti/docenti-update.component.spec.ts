/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { SafnewTestModule } from '../../../test.module';
import { DocentiUpdateComponent } from 'app/entities/docenti/docenti-update.component';
import { DocentiService } from 'app/entities/docenti/docenti.service';
import { Docenti } from 'app/shared/model/docenti.model';

describe('Component Tests', () => {
    describe('Docenti Management Update Component', () => {
        let comp: DocentiUpdateComponent;
        let fixture: ComponentFixture<DocentiUpdateComponent>;
        let service: DocentiService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SafnewTestModule],
                declarations: [DocentiUpdateComponent]
            })
                .overrideTemplate(DocentiUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(DocentiUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DocentiService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Docenti(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.docenti = entity;
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
                    const entity = new Docenti();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.docenti = entity;
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
