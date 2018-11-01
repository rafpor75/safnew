/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SafnewTestModule } from '../../../test.module';
import { CdlDetailComponent } from 'app/entities/cdl/cdl-detail.component';
import { Cdl } from 'app/shared/model/cdl.model';

describe('Component Tests', () => {
    describe('Cdl Management Detail Component', () => {
        let comp: CdlDetailComponent;
        let fixture: ComponentFixture<CdlDetailComponent>;
        const route = ({ data: of({ cdl: new Cdl(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SafnewTestModule],
                declarations: [CdlDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(CdlDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(CdlDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.cdl).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
