import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SafnewSharedModule } from 'app/shared';
import {
    TutorComponent,
    TutorDetailComponent,
    TutorUpdateComponent,
    TutorDeletePopupComponent,
    TutorDeleteDialogComponent,
    tutorRoute,
    tutorPopupRoute
} from './';

const ENTITY_STATES = [...tutorRoute, ...tutorPopupRoute];

@NgModule({
    imports: [SafnewSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [TutorComponent, TutorDetailComponent, TutorUpdateComponent, TutorDeleteDialogComponent, TutorDeletePopupComponent],
    entryComponents: [TutorComponent, TutorUpdateComponent, TutorDeleteDialogComponent, TutorDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SafnewTutorModule {}
