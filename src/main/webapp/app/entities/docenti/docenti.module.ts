import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SafnewSharedModule } from 'app/shared';
import {
    DocentiComponent,
    DocentiDetailComponent,
    DocentiUpdateComponent,
    DocentiDeletePopupComponent,
    DocentiDeleteDialogComponent,
    docentiRoute,
    docentiPopupRoute
} from './';

const ENTITY_STATES = [...docentiRoute, ...docentiPopupRoute];

@NgModule({
    imports: [SafnewSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        DocentiComponent,
        DocentiDetailComponent,
        DocentiUpdateComponent,
        DocentiDeleteDialogComponent,
        DocentiDeletePopupComponent
    ],
    entryComponents: [DocentiComponent, DocentiUpdateComponent, DocentiDeleteDialogComponent, DocentiDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SafnewDocentiModule {}
