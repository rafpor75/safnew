import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SafnewSharedModule } from 'app/shared';
import {
    AnnoAccademicoComponent,
    AnnoAccademicoDetailComponent,
    AnnoAccademicoUpdateComponent,
    AnnoAccademicoDeletePopupComponent,
    AnnoAccademicoDeleteDialogComponent,
    annoAccademicoRoute,
    annoAccademicoPopupRoute
} from './';

const ENTITY_STATES = [...annoAccademicoRoute, ...annoAccademicoPopupRoute];

@NgModule({
    imports: [SafnewSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        AnnoAccademicoComponent,
        AnnoAccademicoDetailComponent,
        AnnoAccademicoUpdateComponent,
        AnnoAccademicoDeleteDialogComponent,
        AnnoAccademicoDeletePopupComponent
    ],
    entryComponents: [
        AnnoAccademicoComponent,
        AnnoAccademicoUpdateComponent,
        AnnoAccademicoDeleteDialogComponent,
        AnnoAccademicoDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SafnewAnnoAccademicoModule {}
