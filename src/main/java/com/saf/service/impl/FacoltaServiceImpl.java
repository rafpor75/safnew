package com.saf.service.impl;

import com.saf.service.FacoltaService;

import com.saf.domain.Facolta;
import com.saf.repository.FacoltaRepository;
//import com.saf.repository.search.FacoltaSearchRepository;
import com.saf.service.dto.FacoltaDTO;
import com.saf.service.mapper.FacoltaMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional;

//import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * Service Implementation for managing Facolta.
 */
@Service
@Transactional
public class FacoltaServiceImpl implements FacoltaService {

    private final Logger log = LoggerFactory.getLogger(FacoltaServiceImpl.class);

    private final FacoltaRepository facoltaRepository;

    private final FacoltaMapper facoltaMapper;

   // private final FacoltaSearchRepository facoltaSearchRepository;

    public FacoltaServiceImpl(FacoltaRepository facoltaRepository, FacoltaMapper facoltaMapper) {
        this.facoltaRepository = facoltaRepository;
        this.facoltaMapper = facoltaMapper;
      //  this.facoltaSearchRepository = facoltaSearchRepository;
    }

    /**
     * Save a facolta.
     *
     * @param facoltaDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public FacoltaDTO save(FacoltaDTO facoltaDTO) {
        log.debug("Request to save Facolta : {}", facoltaDTO);
        Facolta facolta = facoltaMapper.toEntity(facoltaDTO);
        facolta = facoltaRepository.save(facolta);
        FacoltaDTO result = facoltaMapper.toDto(facolta);
  //      facoltaSearchRepository.save(facolta);
        return result;
    }

    /**
     * Get all the facoltas.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<FacoltaDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Facoltas");
        return facoltaRepository.findAll(pageable)
            .map(facoltaMapper::toDto);
    }

    /**
     * Get one facolta by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<FacoltaDTO> findOne(Long id) {
        log.debug("Request to get Facolta : {}", id);
        return facoltaRepository.findById(id)
            .map(facoltaMapper::toDto);
    }

    /**
     * Delete the facolta by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Facolta : {}", id);
        facoltaRepository.deleteById(id);
 //       facoltaSearchRepository.delete(id);
    }

    /**
     * Search for the facolta corresponding to the query.
     *
     * @param query the query of the search
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<FacoltaDTO> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Facoltas for query {}", query);
        Page<Facolta> result = facoltaRepository.findByNome(query, pageable);
        return result.map(facoltaMapper::toDto);
    }
}
