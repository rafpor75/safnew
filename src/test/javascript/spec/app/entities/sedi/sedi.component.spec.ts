/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { SafnewTestModule } from '../../../test.module';
import { SediComponent } from 'app/entities/sedi/sedi.component';
import { SediService } from 'app/entities/sedi/sedi.service';
import { Sedi } from 'app/shared/model/sedi.model';

describe('Component Tests', () => {
    describe('Sedi Management Component', () => {
        let comp: SediComponent;
        let fixture: ComponentFixture<SediComponent>;
        let service: SediService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SafnewTestModule],
                declarations: [SediComponent],
                providers: []
            })
                .overrideTemplate(SediComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(SediComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SediService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Sedi(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.sedis[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
