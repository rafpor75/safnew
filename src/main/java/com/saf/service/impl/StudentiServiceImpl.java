package com.saf.service.impl;

import com.saf.service.StudentiService;

import com.saf.domain.Cdl;
import com.saf.domain.Docenti;
import com.saf.domain.Studenti;
import com.saf.repository.StudentiRepository;
//import com.saf.repository.search.StudentiSearchRepository;
import com.saf.service.dto.CdlDTO;
import com.saf.service.dto.DocentiDTO;
import com.saf.service.dto.StudentiDTO;
import com.saf.service.mapper.StudentiMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
//import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * Service Implementation for managing Studenti.
 */
@Service
@Transactional
public class StudentiServiceImpl implements StudentiService {

    private final Logger log = LoggerFactory.getLogger(StudentiServiceImpl.class);

    private final StudentiRepository studentiRepository;

    private final StudentiMapper studentiMapper;

 //   private final StudentiSearchRepository studentiSearchRepository;

    public StudentiServiceImpl(StudentiRepository studentiRepository, StudentiMapper studentiMapper) {
        this.studentiRepository = studentiRepository;
        this.studentiMapper = studentiMapper;
  //      this.studentiSearchRepository = studentiSearchRepository;
    }

    /**
     * Save a studenti.
     *
     * @param studentiDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public StudentiDTO save(StudentiDTO studentiDTO) {
        log.debug("Request to save Studenti : {}", studentiDTO);
        Studenti studenti = studentiMapper.toEntity(studentiDTO);
        studenti = studentiRepository.save(studenti);
        StudentiDTO result = studentiMapper.toDto(studenti);
   //     studentiSearchRepository.save(studenti);
        return result;
    }

    /**
     * Get all the studentis.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<StudentiDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Studentis");
        return studentiRepository.findAll(pageable)
            .map(studentiMapper::toDto);
    }

    /**
     * Get one studenti by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<StudentiDTO> findOne(Long id) {
        log.debug("Request to get Studenti : {}", id);
        return studentiRepository.findById(id)
            .map(studentiMapper::toDto);
    }

    /**
     * Delete the studenti by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Studenti : {}", id);
        studentiRepository.deleteById(id);
     //   studentiSearchRepository.delete(id);
    }

    /**
     * Search for the studenti corresponding to the query.
     *
     * @param query the query of the search
     * @param pageable the pagination information
     * @return the list of entities
     */
//    @Override
//    @Transactional(readOnly = true)
//    public Page<StudentiDTO> search(String query, Pageable pageable) {
//        log.debug("Request to search for a page of Studentis for query {}", query);
//  //      Page<Studenti> result = studentiSearchRepository.search(queryStringQuery(query), pageable);
//        return result.map(studentiMapper::toDto);
//    }
    
    @Override
	@Transactional(readOnly = true)
	public Page<StudentiDTO> findByCdlId(Long id, Pageable pageable) {
		 log.debug("Request to get Cdls for facolta id ");
		 Page<Studenti> result = studentiRepository.findByCdlId(id, pageable);
	        return result.map(studentiMapper::toDto);
		
	}
    
    @Override
	@Transactional(readOnly = true)
	public Page<StudentiDTO> findByNomeOrCognome(String query, Pageable pageable) {
		log.debug("Request to get Studenti by nome or cognome");
		 Page<Studenti> result = studentiRepository.findByNomeOrCognome(query, query, pageable);
	        return result.map(studentiMapper::toDto);
	}
    
    @Override
    @Transactional(readOnly = true)
    public Page<StudentiDTO> findAllStudentsByCdlId(Long id, Pageable pageable) {
        log.debug("Request to get all Students from PianiDiStudios by cdl id");
        return studentiRepository.findAllStudentsByCdlId(id, pageable).map(studentiMapper::toDto);
    }
}
