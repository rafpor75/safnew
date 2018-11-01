import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SafnewSharedModule } from 'app/shared';
import {
    EsamiComponent,
    EsamiDetailComponent,
    EsamiUpdateComponent,
    EsamiDeletePopupComponent,
    EsamiDeleteDialogComponent,
    esamiRoute,
    esamiPopupRoute
} from './';

const ENTITY_STATES = [...esamiRoute, ...esamiPopupRoute];

@NgModule({
    imports: [SafnewSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [EsamiComponent, EsamiDetailComponent, EsamiUpdateComponent, EsamiDeleteDialogComponent, EsamiDeletePopupComponent],
    entryComponents: [EsamiComponent, EsamiUpdateComponent, EsamiDeleteDialogComponent, EsamiDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SafnewEsamiModule {}
