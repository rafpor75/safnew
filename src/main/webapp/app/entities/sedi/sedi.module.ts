import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SafnewSharedModule } from 'app/shared';
import {
    SediComponent,
    SediDetailComponent,
    SediUpdateComponent,
    SediDeletePopupComponent,
    SediDeleteDialogComponent,
    sediRoute,
    sediPopupRoute
} from './';

const ENTITY_STATES = [...sediRoute, ...sediPopupRoute];

@NgModule({
    imports: [SafnewSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [SediComponent, SediDetailComponent, SediUpdateComponent, SediDeleteDialogComponent, SediDeletePopupComponent],
    entryComponents: [SediComponent, SediUpdateComponent, SediDeleteDialogComponent, SediDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SafnewSediModule {}
