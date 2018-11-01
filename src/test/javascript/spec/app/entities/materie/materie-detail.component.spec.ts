/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SafnewTestModule } from '../../../test.module';
import { MaterieDetailComponent } from 'app/entities/materie/materie-detail.component';
import { Materie } from 'app/shared/model/materie.model';

describe('Component Tests', () => {
    describe('Materie Management Detail Component', () => {
        let comp: MaterieDetailComponent;
        let fixture: ComponentFixture<MaterieDetailComponent>;
        const route = ({ data: of({ materie: new Materie(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SafnewTestModule],
                declarations: [MaterieDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(MaterieDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(MaterieDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.materie).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
