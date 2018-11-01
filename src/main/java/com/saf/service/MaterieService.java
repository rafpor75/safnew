package com.saf.service;

import com.saf.service.dto.CdlDTO;

import com.saf.service.dto.MaterieDTO;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.Optional;
/**
 * Service Interface for managing Materie.
 */
public interface MaterieService {

    /**
     * Save a materie.
     *
     * @param materieDTO the entity to save
     * @return the persisted entity
     */
    MaterieDTO save(MaterieDTO materieDTO);

    /**
     * Get all the materies.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<MaterieDTO> findAll(Pageable pageable);

    /**
     * Get the "id" materie.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<MaterieDTO> findOne(Long id);

    /**
     * Delete the "id" materie.
     *
     * @param id the id of the entity
     */
    void delete(Long id);

    /**
     * Search for the materie corresponding to the query.
     *
     * @param query the query of the search
     * 
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<MaterieDTO> search(String query, Pageable pageable);

	Page<MaterieDTO> findByCdlId(Long cdlId, Pageable pageable);

	List<MaterieDTO> findByCdlId(Long facoltaId);
}
