package com.saf.service.impl;

import com.saf.service.NoteEsameService;
import com.saf.domain.NoteEsame;
import com.saf.repository.NoteEsameRepository;
import com.saf.service.dto.NoteEsameDTO;
import com.saf.service.mapper.NoteEsameMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing NoteEsame.
 */
@Service
@Transactional
public class NoteEsameServiceImpl implements NoteEsameService {

    private final Logger log = LoggerFactory.getLogger(NoteEsameServiceImpl.class);

    private NoteEsameRepository noteEsameRepository;

    private NoteEsameMapper noteEsameMapper;

    public NoteEsameServiceImpl(NoteEsameRepository noteEsameRepository, NoteEsameMapper noteEsameMapper) {
        this.noteEsameRepository = noteEsameRepository;
        this.noteEsameMapper = noteEsameMapper;
    }

    /**
     * Save a noteEsame.
     *
     * @param noteEsameDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public NoteEsameDTO save(NoteEsameDTO noteEsameDTO) {
        log.debug("Request to save NoteEsame : {}", noteEsameDTO);

        NoteEsame noteEsame = noteEsameMapper.toEntity(noteEsameDTO);
        noteEsame = noteEsameRepository.save(noteEsame);
        return noteEsameMapper.toDto(noteEsame);
    }

    /**
     * Get all the noteEsames.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<NoteEsameDTO> findAll(Pageable pageable) {
        log.debug("Request to get all NoteEsames");
        return noteEsameRepository.findAll(pageable)
            .map(noteEsameMapper::toDto);
    }


    /**
     * Get one noteEsame by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<NoteEsameDTO> findOne(Long id) {
        log.debug("Request to get NoteEsame : {}", id);
        return noteEsameRepository.findById(id)
            .map(noteEsameMapper::toDto);
    }

    /**
     * Delete the noteEsame by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete NoteEsame : {}", id);
        noteEsameRepository.deleteById(id);
    }
}
