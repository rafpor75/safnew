/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { SafnewTestModule } from '../../../test.module';
import { SediUpdateComponent } from 'app/entities/sedi/sedi-update.component';
import { SediService } from 'app/entities/sedi/sedi.service';
import { Sedi } from 'app/shared/model/sedi.model';

describe('Component Tests', () => {
    describe('Sedi Management Update Component', () => {
        let comp: SediUpdateComponent;
        let fixture: ComponentFixture<SediUpdateComponent>;
        let service: SediService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SafnewTestModule],
                declarations: [SediUpdateComponent]
            })
                .overrideTemplate(SediUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(SediUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SediService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Sedi(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.sedi = entity;
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
                    const entity = new Sedi();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.sedi = entity;
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
