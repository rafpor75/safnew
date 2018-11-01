/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SafnewTestModule } from '../../../test.module';
import { SediDetailComponent } from 'app/entities/sedi/sedi-detail.component';
import { Sedi } from 'app/shared/model/sedi.model';

describe('Component Tests', () => {
    describe('Sedi Management Detail Component', () => {
        let comp: SediDetailComponent;
        let fixture: ComponentFixture<SediDetailComponent>;
        const route = ({ data: of({ sedi: new Sedi(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SafnewTestModule],
                declarations: [SediDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(SediDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(SediDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.sedi).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
