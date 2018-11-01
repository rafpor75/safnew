package com.saf.service.impl;

import com.saf.service.PianiDiStudioService;

import com.saf.domain.PianiDiStudio;
import com.saf.repository.PianiDiStudioRepository;
//import com.saf.repository.search.PianiDiStudioSearchRepository;
import com.saf.service.dto.PianiDiStudioDTO;
import com.saf.service.dto.StudentiDTO;
import com.saf.service.mapper.PianiDiStudioMapper;
import com.saf.service.mapper.StudentiMapper;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


//import static org.elasticsearch.index.query.QueryBuilders.*;

import org.hibernate.mapping.List;
import java.util.Optional;


/**
 * Service Implementation for managing PianiDiStudio.
 */
@Service
@Transactional
public class PianiDiStudioServiceImpl implements PianiDiStudioService {

    private final Logger log = LoggerFactory.getLogger(PianiDiStudioServiceImpl.class);

    private final PianiDiStudioRepository pianiDiStudioRepository;

    private final PianiDiStudioMapper pianiDiStudioMapper;
    
    private final StudentiMapper studentiMapper;

 //   private final PianiDiStudioSearchRepository pianiDiStudioSearchRepository;

    public PianiDiStudioServiceImpl(PianiDiStudioRepository pianiDiStudioRepository, PianiDiStudioMapper pianiDiStudioMapper, StudentiMapper studentiMapper) {
        this.pianiDiStudioRepository = pianiDiStudioRepository;
        this.pianiDiStudioMapper = pianiDiStudioMapper;
        this.studentiMapper = studentiMapper;
 //       this.pianiDiStudioSearchRepository = pianiDiStudioSearchRepository;
    }

    /**
     * Save a pianiDiStudio.
     *
     * @param pianiDiStudioDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public PianiDiStudioDTO save(PianiDiStudioDTO pianiDiStudioDTO) {
        log.debug("Request to save PianiDiStudio : {}", pianiDiStudioDTO);
        PianiDiStudio pianiDiStudio = pianiDiStudioMapper.toEntity(pianiDiStudioDTO);
        pianiDiStudio = pianiDiStudioRepository.save(pianiDiStudio);
        PianiDiStudioDTO result = pianiDiStudioMapper.toDto(pianiDiStudio);
    //   pianiDiStudioSearchRepository.save(pianiDiStudio);
        return result;
    }

    /**
     * Get all the pianiDiStudios.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<PianiDiStudioDTO> findAll(Pageable pageable) {
        log.debug("Request to get all PianiDiStudios");
        return pianiDiStudioRepository.findAll(pageable)
            .map(pianiDiStudioMapper::toDto);
    }

    /**
     * Get one pianiDiStudio by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<PianiDiStudioDTO> findOne(Long id) {
        log.debug("Request to get PianiDiStudio : {}", id);
        return pianiDiStudioRepository.findOneWithEagerRelationships(id)
            .map(pianiDiStudioMapper::toDto);
    }

    /**
     * Delete the pianiDiStudio by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete PianiDiStudio : {}", id);
        pianiDiStudioRepository.deleteById(id);

    }

    /**
     * Search for the pianiDiStudio corresponding to the query.
     *
     * @param query the query of the search
     * @param pageable the pagination information
     * @return the list of entities
     */
//    @Override
//    @Transactional(readOnly = true)
//    public Page<PianiDiStudioDTO> search(String query, Pageable pageable) {
//        log.debug("Request to search for a page of PianiDiStudios for query {}", query);
//        Page<PianiDiStudio> result = pianiDiStudioRepository.search(query, pageable);
//        return result.map(pianiDiStudioMapper::toDto);
//    }
    
   
    @Override
    @Transactional(readOnly = true)
    public Page<PianiDiStudioDTO> findAllByCdlId(Long id, Pageable pageable) {
        log.debug("Request to get all PianiDiStudios by cdl id");
        return pianiDiStudioRepository.findAllWithEagerRelationshipsByCdlId(id, pageable).map(pianiDiStudioMapper::toDto);
    }
    
    @Override
    @Transactional(readOnly = true)
    public Page<PianiDiStudioDTO> findAllByStuId(Long id, Pageable pageable) {
        log.debug("Request to get all PianiDiStudios by cdl id");
        return pianiDiStudioRepository.findAllWithEagerRelationshipsByStuId(id, pageable).map(pianiDiStudioMapper::toDto);
    }
    
    
    
    
    	
}
