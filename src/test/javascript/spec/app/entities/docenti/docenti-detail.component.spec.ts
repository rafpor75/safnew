/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SafnewTestModule } from '../../../test.module';
import { DocentiDetailComponent } from 'app/entities/docenti/docenti-detail.component';
import { Docenti } from 'app/shared/model/docenti.model';

describe('Component Tests', () => {
    describe('Docenti Management Detail Component', () => {
        let comp: DocentiDetailComponent;
        let fixture: ComponentFixture<DocentiDetailComponent>;
        const route = ({ data: of({ docenti: new Docenti(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SafnewTestModule],
                declarations: [DocentiDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(DocentiDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(DocentiDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.docenti).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
