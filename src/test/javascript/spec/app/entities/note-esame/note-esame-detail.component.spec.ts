/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SafnewTestModule } from '../../../test.module';
import { NoteEsameDetailComponent } from 'app/entities/note-esame/note-esame-detail.component';
import { NoteEsame } from 'app/shared/model/note-esame.model';

describe('Component Tests', () => {
    describe('NoteEsame Management Detail Component', () => {
        let comp: NoteEsameDetailComponent;
        let fixture: ComponentFixture<NoteEsameDetailComponent>;
        const route = ({ data: of({ noteEsame: new NoteEsame(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SafnewTestModule],
                declarations: [NoteEsameDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(NoteEsameDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(NoteEsameDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.noteEsame).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
