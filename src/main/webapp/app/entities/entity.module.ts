import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SafnewFacoltaModule } from './facolta/facolta.module';
import { SafnewAnnoAccademicoModule } from './anno-accademico/anno-accademico.module';
import { SafnewCdlModule } from './cdl/cdl.module';
import { SafnewDocentiModule } from './docenti/docenti.module';
import { SafnewMaterieModule } from './materie/materie.module';
import { SafnewPianiDiStudioModule } from './piani-di-studio/piani-di-studio.module';
import { SafnewSediModule } from './sedi/sedi.module';
import { SafnewStudentiModule } from './studenti/studenti.module';
import { SafnewTutorModule } from './tutor/tutor.module';
import { SafnewEsamiModule } from './esami/esami.module';
import { SafnewNoteEsameModule } from './note-esame/note-esame.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        SafnewFacoltaModule,
        SafnewAnnoAccademicoModule,
        SafnewCdlModule,
        SafnewDocentiModule,
        SafnewMaterieModule,
        SafnewPianiDiStudioModule,
        SafnewSediModule,
        SafnewStudentiModule,
        SafnewTutorModule,
        SafnewEsamiModule,
        SafnewNoteEsameModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SafnewEntityModule {}
