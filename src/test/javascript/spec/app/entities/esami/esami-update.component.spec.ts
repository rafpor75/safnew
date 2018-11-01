/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { SafnewTestModule } from '../../../test.module';
import { EsamiUpdateComponent } from 'app/entities/esami/esami-update.component';
import { EsamiService } from 'app/entities/esami/esami.service';
import { Esami } from 'app/shared/model/esami.model';

describe('Component Tests', () => {
    describe('Esami Management Update Component', () => {
        let comp: EsamiUpdateComponent;
        let fixture: ComponentFixture<EsamiUpdateComponent>;
        let service: EsamiService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SafnewTestModule],
                declarations: [EsamiUpdateComponent]
            })
                .overrideTemplate(EsamiUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(EsamiUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(EsamiService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Esami(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.esami = entity;
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
                    const entity = new Esami();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.esami = entity;
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
