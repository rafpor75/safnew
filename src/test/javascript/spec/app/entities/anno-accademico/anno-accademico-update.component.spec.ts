/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { SafnewTestModule } from '../../../test.module';
import { AnnoAccademicoUpdateComponent } from 'app/entities/anno-accademico/anno-accademico-update.component';
import { AnnoAccademicoService } from 'app/entities/anno-accademico/anno-accademico.service';
import { AnnoAccademico } from 'app/shared/model/anno-accademico.model';

describe('Component Tests', () => {
    describe('AnnoAccademico Management Update Component', () => {
        let comp: AnnoAccademicoUpdateComponent;
        let fixture: ComponentFixture<AnnoAccademicoUpdateComponent>;
        let service: AnnoAccademicoService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SafnewTestModule],
                declarations: [AnnoAccademicoUpdateComponent]
            })
                .overrideTemplate(AnnoAccademicoUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(AnnoAccademicoUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(AnnoAccademicoService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new AnnoAccademico(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.annoAccademico = entity;
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
                    const entity = new AnnoAccademico();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.annoAccademico = entity;
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
