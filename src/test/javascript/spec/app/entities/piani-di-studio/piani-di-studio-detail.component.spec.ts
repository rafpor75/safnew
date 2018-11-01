/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SafnewTestModule } from '../../../test.module';
import { PianiDiStudioDetailComponent } from 'app/entities/piani-di-studio/piani-di-studio-detail.component';
import { PianiDiStudio } from 'app/shared/model/piani-di-studio.model';

describe('Component Tests', () => {
    describe('PianiDiStudio Management Detail Component', () => {
        let comp: PianiDiStudioDetailComponent;
        let fixture: ComponentFixture<PianiDiStudioDetailComponent>;
        const route = ({ data: of({ pianiDiStudio: new PianiDiStudio(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SafnewTestModule],
                declarations: [PianiDiStudioDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(PianiDiStudioDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(PianiDiStudioDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.pianiDiStudio).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
