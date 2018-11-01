/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { SafnewTestModule } from '../../../test.module';
import { AnnoAccademicoComponent } from 'app/entities/anno-accademico/anno-accademico.component';
import { AnnoAccademicoService } from 'app/entities/anno-accademico/anno-accademico.service';
import { AnnoAccademico } from 'app/shared/model/anno-accademico.model';

describe('Component Tests', () => {
    describe('AnnoAccademico Management Component', () => {
        let comp: AnnoAccademicoComponent;
        let fixture: ComponentFixture<AnnoAccademicoComponent>;
        let service: AnnoAccademicoService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SafnewTestModule],
                declarations: [AnnoAccademicoComponent],
                providers: []
            })
                .overrideTemplate(AnnoAccademicoComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(AnnoAccademicoComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(AnnoAccademicoService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new AnnoAccademico(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.annoAccademicos[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
