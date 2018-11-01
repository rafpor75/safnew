import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SafnewSharedModule } from 'app/shared';
import {
    CdlComponent,
    CdlDetailComponent,
    CdlUpdateComponent,
    CdlDeletePopupComponent,
    CdlDeleteDialogComponent,
    cdlRoute,
    cdlPopupRoute
} from './';

const ENTITY_STATES = [...cdlRoute, ...cdlPopupRoute];

@NgModule({
    imports: [SafnewSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [CdlComponent, CdlDetailComponent, CdlUpdateComponent, CdlDeleteDialogComponent, CdlDeletePopupComponent],
    entryComponents: [CdlComponent, CdlUpdateComponent, CdlDeleteDialogComponent, CdlDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SafnewCdlModule {}
