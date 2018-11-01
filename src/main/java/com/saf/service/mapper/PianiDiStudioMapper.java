package com.saf.service.mapper;

import com.saf.domain.*;
import com.saf.service.dto.PianiDiStudioDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity PianiDiStudio and its DTO PianiDiStudioDTO.
 */
@Mapper(componentModel = "spring", uses = {AnnoAccademicoMapper.class, CdlMapper.class, MaterieMapper.class, StudentiMapper.class})
public interface PianiDiStudioMapper extends EntityMapper<PianiDiStudioDTO, PianiDiStudio> {

    @Mapping(source = "relAnnoAccademico.id", target = "relAnnoAccademicoId")
    @Mapping(source = "relAnnoAccademico.descrizione", target = "relAnnoAccademicoDescrizione")
    @Mapping(source = "relPdsCdl.id", target = "relPdsCdlId")
    @Mapping(source = "relPdsCdl.nome", target = "relPdsCdlNome")
    @Mapping(source = "relPdsCdl.codice", target = "relPdsCdlCodice")
    @Mapping(source = "relPdsStu.id", target = "relPdsStuId")
    @Mapping(source = "relPdsStu.nome", target = "relPdsStuNome")
    @Mapping(source = "relPdsStu.cognome", target = "relPdsStuCognome")
    @Mapping(source = "relPdsStu.matricola", target = "relPdsStuMatricola")
    PianiDiStudioDTO toDto(PianiDiStudio pianiDiStudio);

    @Mapping(source = "relAnnoAccademicoId", target = "relAnnoAccademico")
    @Mapping(source = "relPdsCdlId", target = "relPdsCdl")
    @Mapping(source = "relPdsStuId", target = "relPdsStu")
    PianiDiStudio toEntity(PianiDiStudioDTO pianiDiStudioDTO);

    default PianiDiStudio fromId(Long id) {
        if (id == null) {
            return null;
        }
        PianiDiStudio pianiDiStudio = new PianiDiStudio();
        pianiDiStudio.setId(id);
        return pianiDiStudio;
    }
}
