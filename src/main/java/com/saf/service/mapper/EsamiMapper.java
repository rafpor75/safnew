package com.saf.service.mapper;

import com.saf.domain.*;
import com.saf.service.dto.EsamiDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Esami and its DTO EsamiDTO.
 */
@Mapper(componentModel = "spring", uses = {MaterieMapper.class})
public interface EsamiMapper extends EntityMapper<EsamiDTO, Esami> {

    @Mapping(source = "relMatEsami.id", target = "relMatEsamiId")
    @Mapping(source = "relMatEsami.nome", target = "relMatEsamiNome")
    @Mapping(source = "relMatEsami.relMatsCdl.nome", target = "relEsamiCdlNome")
  	EsamiDTO toDto(Esami esami);

    @Mapping(source = "relMatEsamiId", target = "relMatEsami")
    Esami toEntity(EsamiDTO esamiDTO);

    default Esami fromId(Long id) {
        if (id == null) {
            return null;
        }
        Esami esami = new Esami();
        esami.setId(id);
        return esami;
    }
}
