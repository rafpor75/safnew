/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { SafnewTestModule } from '../../../test.module';
import { NoteEsameUpdateComponent } from 'app/entities/note-esame/note-esame-update.component';
import { NoteEsameService } from 'app/entities/note-esame/note-esame.service';
import { NoteEsame } from 'app/shared/model/note-esame.model';

describe('Component Tests', () => {
    describe('NoteEsame Management Update Component', () => {
        let comp: NoteEsameUpdateComponent;
        let fixture: ComponentFixture<NoteEsameUpdateComponent>;
        let service: NoteEsameService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SafnewTestModule],
                declarations: [NoteEsameUpdateComponent]
            })
                .overrideTemplate(NoteEsameUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(NoteEsameUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(NoteEsameService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new NoteEsame(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.noteEsame = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it(
                'Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new NoteEsame();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.noteEsame = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});
