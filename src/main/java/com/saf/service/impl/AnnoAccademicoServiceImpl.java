package com.saf.service.impl;

import java.util.LinkedList;
import java.util.Optional;
import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.saf.domain.AnnoAccademico;
import com.saf.repository.AnnoAccademicoRepository;
import com.saf.service.AnnoAccademicoService;
//import com.saf.repository.search.AnnoAccademicoSearchRepository;
import com.saf.service.dto.AnnoAccademicoDTO;
import com.saf.service.mapper.AnnoAccademicoMapper;

//import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * Service Implementation for managing AnnoAccademico.
 */
@Service
@Transactional
public class AnnoAccademicoServiceImpl implements AnnoAccademicoService {

    private final Logger log = LoggerFactory.getLogger(AnnoAccademicoServiceImpl.class);

    private final AnnoAccademicoRepository annoAccademicoRepository;

    private final AnnoAccademicoMapper annoAccademicoMapper;

    //private final AnnoAccademicoSearchRepository annoAccademicoSearchRepository;

    public AnnoAccademicoServiceImpl(AnnoAccademicoRepository annoAccademicoRepository, AnnoAccademicoMapper annoAccademicoMapper) {
        this.annoAccademicoRepository = annoAccademicoRepository;
        this.annoAccademicoMapper = annoAccademicoMapper;
      //  this.annoAccademicoSearchRepository = annoAccademicoSearchRepository;
    }

    /**
     * Save a annoAccademico.
     *
     * @param annoAccademicoDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public AnnoAccademicoDTO save(AnnoAccademicoDTO annoAccademicoDTO) {
        log.debug("Request to save AnnoAccademico : {}", annoAccademicoDTO);
        AnnoAccademico annoAccademico = annoAccademicoMapper.toEntity(annoAccademicoDTO);
        annoAccademico = annoAccademicoRepository.save(annoAccademico);
        AnnoAccademicoDTO result = annoAccademicoMapper.toDto(annoAccademico);
  //      annoAccademicoSearchRepository.save(annoAccademico);
        return result;
    }

    /**
     * Get all the annoAccademicos.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<AnnoAccademicoDTO> findAll() {
        log.debug("Request to get all AnnoAccademicos");
        return annoAccademicoRepository.findAll().stream()
            .map(annoAccademicoMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }

    /**
     * Get one annoAccademico by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<AnnoAccademicoDTO> findOne(Long id) {
        log.debug("Request to get AnnoAccademico : {}", id);
       
        return annoAccademicoRepository.findById(id)
                .map(annoAccademicoMapper::toDto);
    }

    /**
     * Delete the annoAccademico by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete AnnoAccademico : {}", id);
        annoAccademicoRepository.deleteById(id);
    //    annoAccademicoSearchRepository.delete(id);
    }

    /**
     * Search for the annoAccademico corresponding to the query.
     *
     * @param query the query of the search
     * @return the list of entities
     */
//    @Override
//    @Transactional(readOnly = true)
//    public List<AnnoAccademicoDTO> search(String query) {
//        log.debug("Request to search AnnoAccademicos for query {}", query);
//        return StreamSupport
//            .stream(annoAccademicoSearchRepository.search(queryStringQuery(query)).spliterator(), false)
//            .map(annoAccademicoMapper::toDto)
//            .collect(Collectors.toList());
//    }
    
    @Override
    public Page<AnnoAccademicoDTO> findByDescrizione(String descrizione, Pageable pageable){
    	 log.debug("Request to get Materie for cdl id ");
		 Page<AnnoAccademico> result = annoAccademicoRepository.findByDescrizioneIgnoreCaseContaining(descrizione, pageable);
	        return result.map(annoAccademicoMapper::toDto);
    }
}
