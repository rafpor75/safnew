package com.saf.service;

import com.saf.service.dto.SediDTO;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.Optional;
/**
 * Service Interface for managing Sedi.
 */
public interface SediService {

    /**
     * Save a sedi.
     *
     * @param sediDTO the entity to save
     * @return the persisted entity
     */
    SediDTO save(SediDTO sediDTO);

    /**
     * Get all the sedis.
     *
     * @return the list of entities
     */
    List<SediDTO> findAll();

    /**
     * Get the "id" sedi.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<SediDTO> findOne(Long id);

    /**
     * Delete the "id" sedi.
     *
     * @param id the id of the entity
     */
    void delete(Long id);

    /**
     * Search for the sedi corresponding to the query.
     *
     * @param query the query of the search
     * 
     * @return the list of entities
     */
    //List<SediDTO> search(String query);

	Page<SediDTO> search(String query, Pageable pageable);
}
