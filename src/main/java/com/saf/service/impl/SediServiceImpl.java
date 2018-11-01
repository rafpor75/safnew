package com.saf.service.impl;

import com.saf.service.SediService;
import com.saf.domain.Materie;
import com.saf.domain.Sedi;
import com.saf.repository.SediRepository;
//import com.saf.repository.search.SediSearchRepository;
import com.saf.service.dto.MaterieDTO;
import com.saf.service.dto.SediDTO;
import com.saf.service.mapper.SediMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import java.util.Optional;
//import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * Service Implementation for managing Sedi.
 */
@Service
@Transactional
public class SediServiceImpl implements SediService {

    private final Logger log = LoggerFactory.getLogger(SediServiceImpl.class);

    private final SediRepository sediRepository;

    private final SediMapper sediMapper;

  //  private final SediSearchRepository sediSearchRepository;

    public SediServiceImpl(SediRepository sediRepository, SediMapper sediMapper) {
        this.sediRepository = sediRepository;
        this.sediMapper = sediMapper;
     //  this.sediSearchRepository = sediSearchRepository;
    }

    /**
     * Save a sedi.
     *
     * @param sediDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public SediDTO save(SediDTO sediDTO) {
        log.debug("Request to save Sedi : {}", sediDTO);
        Sedi sedi = sediMapper.toEntity(sediDTO);
        sedi = sediRepository.save(sedi);
        SediDTO result = sediMapper.toDto(sedi);
    //    sediSearchRepository.save(sedi);
        return result;
    }

    /**
     * Get all the sedis.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<SediDTO> findAll() {
        log.debug("Request to get all Sedis");
        return sediRepository.findAll().stream()
            .map(sediMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }

    /**
     * Get one sedi by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<SediDTO> findOne(Long id) {
        log.debug("Request to get Sedi : {}", id);
        return sediRepository.findById(id)
            .map(sediMapper::toDto);
    }

    /**
     * Delete the sedi by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Sedi : {}", id);
        sediRepository.deleteById(id);

    }

    /**
     * Search for the sedi corresponding to the query.
     *
     * @param query the query of the search
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<SediDTO> search(String query, Pageable pageable) {
        log.debug("Request to search Sedis for query {}", query);
        
        
        Page<Sedi> result = sediRepository.findByNome(query,pageable);
        return result.map(sediMapper::toDto);
    }
}
