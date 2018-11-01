/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SafnewTestModule } from '../../../test.module';
import { StudentiDetailComponent } from 'app/entities/studenti/studenti-detail.component';
import { Studenti } from 'app/shared/model/studenti.model';

describe('Component Tests', () => {
    describe('Studenti Management Detail Component', () => {
        let comp: StudentiDetailComponent;
        let fixture: ComponentFixture<StudentiDetailComponent>;
        const route = ({ data: of({ studenti: new Studenti(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SafnewTestModule],
                declarations: [StudentiDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(StudentiDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(StudentiDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.studenti).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
