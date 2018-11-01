import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SafnewSharedModule } from 'app/shared';
import {
    StudentiComponent,
    StudentiDetailComponent,
    StudentiUpdateComponent,
    StudentiDeletePopupComponent,
    StudentiDeleteDialogComponent,
    studentiRoute,
    studentiPopupRoute
} from './';

const ENTITY_STATES = [...studentiRoute, ...studentiPopupRoute];

@NgModule({
    imports: [SafnewSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        StudentiComponent,
        StudentiDetailComponent,
        StudentiUpdateComponent,
        StudentiDeleteDialogComponent,
        StudentiDeletePopupComponent
    ],
    entryComponents: [StudentiComponent, StudentiUpdateComponent, StudentiDeleteDialogComponent, StudentiDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SafnewStudentiModule {}
