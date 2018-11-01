package com.saf.service;

import com.saf.service.dto.CdlDTO;

import com.saf.service.dto.DocentiDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;
/**
 * Service Interface for managing Docenti.
 */
public interface DocentiService {

    /**
     * Save a docenti.
     *
     * @param docentiDTO the entity to save
     * @return the persisted entity
     */
    DocentiDTO save(DocentiDTO docentiDTO);

    /**
     * Get all the docentis.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<DocentiDTO> findAll(Pageable pageable);

    /**
     * Get the "id" docenti.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<DocentiDTO> findOne(Long id);

    /**
     * Delete the "id" docenti.
     *
     * @param id the id of the entity
     */
    void delete(Long id);

    /**
     * Search for the docenti corresponding to the query.
     *
     * @param query the query of the search
     * 
     * @param pageable the pagination information
     * @return the list of entities
     */
  //  Page<DocentiDTO> search(String query, Pageable pageable);
    
    Page<DocentiDTO> findByNomeOrCognome(String query, Pageable pageable);
   

}
