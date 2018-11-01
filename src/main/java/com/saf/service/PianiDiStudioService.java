package com.saf.service;

import com.saf.service.dto.PianiDiStudioDTO;

import com.saf.service.dto.StudentiDTO;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.Optional;
/**
 * Service Interface for managing PianiDiStudio.
 */
public interface PianiDiStudioService {

    /**
     * Save a pianiDiStudio.
     *
     * @param pianiDiStudioDTO the entity to save
     * @return the persisted entity
     */
    PianiDiStudioDTO save(PianiDiStudioDTO pianiDiStudioDTO);

    /**
     * Get all the pianiDiStudios.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<PianiDiStudioDTO> findAll(Pageable pageable);

    /**
     * Get the "id" pianiDiStudio.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<PianiDiStudioDTO> findOne(Long id);

    /**
     * Delete the "id" pianiDiStudio.
     *
     * @param id the id of the entity
     */
    void delete(Long id);

    /**
     * Search for the pianiDiStudio corresponding to the query.
     *
     * @param query the query of the search
     * 
     * @param pageable the pagination information
     * @return the list of entities
     */
 //   Page<PianiDiStudioDTO> search(String query, Pageable pageable);
    
    
  	Page<PianiDiStudioDTO> findAllByCdlId(Long id, Pageable pageable);
  	
  	Page<PianiDiStudioDTO> findAllByStuId(Long id, Pageable pageable);

	
}
