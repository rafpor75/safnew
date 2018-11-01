package com.saf.service;

import com.saf.service.dto.AnnoAccademicoDTO;

import com.saf.service.dto.MaterieDTO;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing AnnoAccademico.
 */
public interface AnnoAccademicoService {

    /**
     * Save a annoAccademico.
     *
     * @param annoAccademicoDTO the entity to save
     * @return the persisted entity
     */
    AnnoAccademicoDTO save(AnnoAccademicoDTO annoAccademicoDTO);

    /**
     * Get all the annoAccademicos.
     *
     * @return the list of entities
     */
    List<AnnoAccademicoDTO> findAll();

    /**
     * Get the "id" annoAccademico.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<AnnoAccademicoDTO> findOne(Long id);

    /**
     * Delete the "id" annoAccademico.
     *
     * @param id the id of the entity
     */
    void delete(Long id);

    /**
     * Search for the annoAccademico corresponding to the query.
     *
     * @param query the query of the search
     * 
     * @return the list of entities
     */
   // List<AnnoAccademicoDTO> search(String query);

	//Page<AnnoAccademicoDTO> search(String query, Pageable pageable);
	Page<AnnoAccademicoDTO> findByDescrizione(String descrizione, Pageable pageable);
	
}
