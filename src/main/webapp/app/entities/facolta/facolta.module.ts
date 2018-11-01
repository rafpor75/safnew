import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SafnewSharedModule } from 'app/shared';
import {
    FacoltaComponent,
    FacoltaDetailComponent,
    FacoltaUpdateComponent,
    FacoltaDeletePopupComponent,
    FacoltaDeleteDialogComponent,
    facoltaRoute,
    facoltaPopupRoute
} from './';

const ENTITY_STATES = [...facoltaRoute, ...facoltaPopupRoute];

@NgModule({
    imports: [SafnewSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        FacoltaComponent,
        FacoltaDetailComponent,
        FacoltaUpdateComponent,
        FacoltaDeleteDialogComponent,
        FacoltaDeletePopupComponent
    ],
    entryComponents: [FacoltaComponent, FacoltaUpdateComponent, FacoltaDeleteDialogComponent, FacoltaDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SafnewFacoltaModule {}
