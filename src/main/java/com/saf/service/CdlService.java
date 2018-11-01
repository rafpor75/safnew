package com.saf.service;

import com.saf.service.dto.CdlDTO;


import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing Cdl.
 */
public interface CdlService {

    /**
     * Save a cdl.
     *
     * @param cdlDTO the entity to save
     * @return the persisted entity
     */
    CdlDTO save(CdlDTO cdlDTO);

    /**
     * Get all the cdls.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<CdlDTO> findAll(Pageable pageable);

    /**
     * Get the "id" cdl.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<CdlDTO> findOne(Long id);

    /**
     * Delete the "id" cdl.
     *
     * @param id the id of the entity
     */
    void delete(Long id);

    /**
     * Search for the cdl corresponding to the query.
     *
     * @param query the query of the search
     * 
     * @param pageable the pagination information
     * @return the list of entities
     */
 //   Page<CdlDTO> search(String query, Pageable pageable);

	Page<CdlDTO> findByFacoltaId(Long facoltaId, Pageable pageable);

	Page<CdlDTO> findByCodiceOrNome(String descrizione, Pageable pageable);
	
	List<CdlDTO> findByFacoltaId(Long facoltaId);

	List<CdlDTO> findAll();
}
