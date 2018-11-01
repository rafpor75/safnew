package com.saf.service.impl;

import com.saf.service.TutorService;
import java.util.Optional;
import com.saf.domain.Studenti;
import com.saf.domain.Tutor;
import com.saf.repository.TutorRepository;
//import com.saf.repository.search.TutorSearchRepository;
import com.saf.service.dto.StudentiDTO;
import com.saf.service.dto.TutorDTO;
import com.saf.service.mapper.TutorMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


//import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * Service Implementation for managing Tutor.
 */
@Service
@Transactional
public class TutorServiceImpl implements TutorService {

    private final Logger log = LoggerFactory.getLogger(TutorServiceImpl.class);

    private final TutorRepository tutorRepository;

    private final TutorMapper tutorMapper;

    //private final TutorSearchRepository tutorSearchRepository;

    public TutorServiceImpl(TutorRepository tutorRepository, TutorMapper tutorMapper) {
        this.tutorRepository = tutorRepository;
        this.tutorMapper = tutorMapper;
  //      this.tutorSearchRepository = tutorSearchRepository;
    }

    /**
     * Save a tutor.
     *
     * @param tutorDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public TutorDTO save(TutorDTO tutorDTO) {
        log.debug("Request to save Tutor : {}", tutorDTO);
        Tutor tutor = tutorMapper.toEntity(tutorDTO);
        tutor = tutorRepository.save(tutor);
        TutorDTO result = tutorMapper.toDto(tutor);
   //     tutorSearchRepository.save(tutor);
        return result;
    }

    /**
     * Get all the tutors.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<TutorDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Tutors");
        return tutorRepository.findAll(pageable)
            .map(tutorMapper::toDto);
    }

    /**
     * Get one tutor by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<TutorDTO> findOne(Long id) {
        log.debug("Request to get Tutor : {}", id);
        return tutorRepository.findById(id)
            .map(tutorMapper::toDto);
    }

    /**
     * Delete the tutor by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Tutor : {}", id);
        tutorRepository.deleteById(id);
  //      tutorSearchRepository.delete(id);
    }

    /**
     * Search for the tutor corresponding to the query.
     *
     * @param query the query of the search
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
   	@Transactional(readOnly = true)
   	public Page<TutorDTO> findByNomeOrCognome(String query, Pageable pageable) {
   		log.debug("Request to get Studenti by nome or cognome");
   		 Page<Tutor> result = tutorRepository.findByNomeOrCognome(query, query, pageable);
   	        return result.map(tutorMapper::toDto);
   	}
}
