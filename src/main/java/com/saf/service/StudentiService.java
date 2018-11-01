package com.saf.service;


import com.saf.service.dto.StudentiDTO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;
import java.util.Optional;
/**
 * Service Interface for managing Studenti.
 */
public interface StudentiService {

    /**
     * Save a studenti.
     *
     * @param studentiDTO the entity to save
     * @return the persisted entity
     */
    StudentiDTO save(StudentiDTO studentiDTO);

    /**
     * Get all the studentis.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<StudentiDTO> findAll(Pageable pageable);

    /**
     * Get the "id" studenti.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<StudentiDTO> findOne(Long id);

    /**
     * Delete the "id" studenti.
     *
     * @param id the id of the entity
     */
    void delete(Long id);

    /**
     * Search for the studenti corresponding to the query.
     *
     * @param query the query of the search
     * 
     * @param pageable the pagination information
     * @return the list of entities
     */
  //  Page<StudentiDTO> search(String query, Pageable pageable);

	Page<StudentiDTO> findByCdlId(Long id, Pageable pageable);
	
	Page<StudentiDTO> findByNomeOrCognome(String query, Pageable pageable);
	
	Page<StudentiDTO> findAllStudentsByCdlId(Long id, Pageable pageable);
}
