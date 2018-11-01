import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SafnewSharedModule } from 'app/shared';
import {
    PianiDiStudioComponent,
    PianiDiStudioDetailComponent,
    PianiDiStudioUpdateComponent,
    PianiDiStudioDeletePopupComponent,
    PianiDiStudioDeleteDialogComponent,
    pianiDiStudioRoute,
    pianiDiStudioPopupRoute
} from './';

const ENTITY_STATES = [...pianiDiStudioRoute, ...pianiDiStudioPopupRoute];

@NgModule({
    imports: [SafnewSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        PianiDiStudioComponent,
        PianiDiStudioDetailComponent,
        PianiDiStudioUpdateComponent,
        PianiDiStudioDeleteDialogComponent,
        PianiDiStudioDeletePopupComponent
    ],
    entryComponents: [
        PianiDiStudioComponent,
        PianiDiStudioUpdateComponent,
        PianiDiStudioDeleteDialogComponent,
        PianiDiStudioDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SafnewPianiDiStudioModule {}
