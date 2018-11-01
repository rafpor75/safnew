import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SafnewSharedModule } from 'app/shared';
import {
    MaterieComponent,
    MaterieDetailComponent,
    MaterieUpdateComponent,
    MaterieDeletePopupComponent,
    MaterieDeleteDialogComponent,
    materieRoute,
    materiePopupRoute
} from './';

const ENTITY_STATES = [...materieRoute, ...materiePopupRoute];

@NgModule({
    imports: [SafnewSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        MaterieComponent,
        MaterieDetailComponent,
        MaterieUpdateComponent,
        MaterieDeleteDialogComponent,
        MaterieDeletePopupComponent
    ],
    entryComponents: [MaterieComponent, MaterieUpdateComponent, MaterieDeleteDialogComponent, MaterieDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SafnewMaterieModule {}
