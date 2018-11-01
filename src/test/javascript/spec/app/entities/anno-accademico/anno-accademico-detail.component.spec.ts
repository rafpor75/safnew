/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SafnewTestModule } from '../../../test.module';
import { AnnoAccademicoDetailComponent } from 'app/entities/anno-accademico/anno-accademico-detail.component';
import { AnnoAccademico } from 'app/shared/model/anno-accademico.model';

describe('Component Tests', () => {
    describe('AnnoAccademico Management Detail Component', () => {
        let comp: AnnoAccademicoDetailComponent;
        let fixture: ComponentFixture<AnnoAccademicoDetailComponent>;
        const route = ({ data: of({ annoAccademico: new AnnoAccademico(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SafnewTestModule],
                declarations: [AnnoAccademicoDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(AnnoAccademicoDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(AnnoAccademicoDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.annoAccademico).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
