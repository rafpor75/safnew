/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SafnewTestModule } from '../../../test.module';
import { EsamiDetailComponent } from 'app/entities/esami/esami-detail.component';
import { Esami } from 'app/shared/model/esami.model';

describe('Component Tests', () => {
    describe('Esami Management Detail Component', () => {
        let comp: EsamiDetailComponent;
        let fixture: ComponentFixture<EsamiDetailComponent>;
        const route = ({ data: of({ esami: new Esami(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SafnewTestModule],
                declarations: [EsamiDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(EsamiDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(EsamiDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.esami).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
