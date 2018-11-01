import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SafnewSharedModule } from 'app/shared';
import {
    NoteEsameComponent,
    NoteEsameDetailComponent,
    NoteEsameUpdateComponent,
    NoteEsameDeletePopupComponent,
    NoteEsameDeleteDialogComponent,
    noteEsameRoute,
    noteEsamePopupRoute
} from './';

const ENTITY_STATES = [...noteEsameRoute, ...noteEsamePopupRoute];

@NgModule({
    imports: [SafnewSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        NoteEsameComponent,
        NoteEsameDetailComponent,
        NoteEsameUpdateComponent,
        NoteEsameDeleteDialogComponent,
        NoteEsameDeletePopupComponent
    ],
    entryComponents: [NoteEsameComponent, NoteEsameUpdateComponent, NoteEsameDeleteDialogComponent, NoteEsameDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SafnewNoteEsameModule {}
