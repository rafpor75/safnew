/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { SafnewTestModule } from '../../../test.module';
import { CdlUpdateComponent } from 'app/entities/cdl/cdl-update.component';
import { CdlService } from 'app/entities/cdl/cdl.service';
import { Cdl } from 'app/shared/model/cdl.model';

describe('Component Tests', () => {
    describe('Cdl Management Update Component', () => {
        let comp: CdlUpdateComponent;
        let fixture: ComponentFixture<CdlUpdateComponent>;
        let service: CdlService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SafnewTestModule],
                declarations: [CdlUpdateComponent]
            })
                .overrideTemplate(CdlUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(CdlUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CdlService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Cdl(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.cdl = entity;
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
                    const entity = new Cdl();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.cdl = entity;
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
