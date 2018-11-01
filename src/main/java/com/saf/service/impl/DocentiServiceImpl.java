package com.saf.service.impl;

import com.saf.service.DocentiService;


import com.codahale.metrics.annotation.Timed;
import com.saf.domain.Cdl;
import com.saf.domain.Docenti;
import com.saf.repository.DocentiRepository;
import com.saf.service.dto.CdlDTO;
import com.saf.service.dto.DocentiDTO;
import com.saf.service.mapper.DocentiMapper;
import com.saf.web.rest.util.PaginationUtil;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

//import static org.elasticsearch.index.query.QueryBuilders.*;

import java.util.List;
import java.util.Optional;
/**
 * Service Implementation for managing Docenti.
 */
@Service
@Transactional
public class DocentiServiceImpl implements DocentiService {

    private final Logger log = LoggerFactory.getLogger(DocentiServiceImpl.class);

    private final DocentiRepository docentiRepository;

    private final DocentiMapper docentiMapper;

  //  private final DocentiSearchRepository docentiSearchRepository;

    public DocentiServiceImpl(DocentiRepository docentiRepository, DocentiMapper docentiMapper) {
        this.docentiRepository = docentiRepository;
        this.docentiMapper = docentiMapper;
  //      this.docentiSearchRepository = docentiSearchRepository;
    }

    /**
     * Save a docenti.
     *
     * @param docentiDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public DocentiDTO save(DocentiDTO docentiDTO) {
        log.debug("Request to save Docenti : {}", docentiDTO);
        Docenti docenti = docentiMapper.toEntity(docentiDTO);
        docenti = docentiRepository.save(docenti);
        DocentiDTO result = docentiMapper.toDto(docenti);
   //     docentiSearchRepository.save(docenti);
        return result;
    }

    /**
     * Get all the docentis.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<DocentiDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Docentis");
        return docentiRepository.findAll(pageable)
            .map(docentiMapper::toDto);
    }

    /**
     * Get one docenti by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<DocentiDTO> findOne(Long id) {
        log.debug("Request to get Docenti : {}", id);
        return docentiRepository.findById(id)
            .map(docentiMapper::toDto);
    }

    /**
     * Delete the docenti by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Docenti : {}", id);
        docentiRepository.deleteById(id);
     //   docentiSearchRepository.delete(id);
    }

    /**
     * Search for the docenti corresponding to the query.
     *
     * @param query the query of the search
     * @param pageable the pagination information
     * @return the list of entities
     */
//    @Override
//    @Transactional(readOnly = true)
//    public Page<DocentiDTO> search(String query, Pageable pageable) {
//        log.debug("Request to search for a page of Docentis for query {}", query);
//        Page<Docenti> result = docentiSearchRepository.search(queryStringQuery(query), pageable);
//        return result.map(docentiMapper::toDto);
//    }

	@Override
	@Transactional(readOnly = true)
	public Page<DocentiDTO> findByNomeOrCognome(String query, Pageable pageable) {
		log.debug("Request to get Docenti by nome or cognome");
		 Page<Docenti> result = docentiRepository.findByNomeOrCognome(query, query, pageable);
	        return result.map(docentiMapper::toDto);
	}
	
	 
	
	 
}
