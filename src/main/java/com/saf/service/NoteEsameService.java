package com.saf.service;

import com.saf.service.dto.CdlDTO;

import com.saf.service.dto.NoteEsameDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.Optional;
/**
 * Service Interface for managing NoteEsame.
 */
public interface NoteEsameService {

    /**
     * Save a noteEsame.
     *
     * @param noteEsameDTO the entity to save
     * @return the persisted entity
     */
    NoteEsameDTO save(NoteEsameDTO noteEsameDTO);

    /**
     * Get all the noteEsames.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<NoteEsameDTO> findAll(Pageable pageable);

    /**
     * Get the "id" noteEsame.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<NoteEsameDTO> findOne(Long id);

    /**
     * Delete the "id" noteEsame.
     *
     * @param id the id of the entity
     */
    void delete(Long id);

    /**
     * Search for the noteEsame corresponding to the query.
     *
     * @param query the query of the search
     * 
     * @param pageable the pagination information
     * @return the list of entities
     */
 //   Page<NoteEsameDTO> search(String query, Pageable pageable);
    
    Page<NoteEsameDTO> findByEsameId(Long esameId, Pageable pageable);
    
    Long countByEsameId(Long esameId);
}
