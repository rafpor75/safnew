package com.saf.service.impl;

import com.saf.service.EsamiService;

import com.saf.domain.Esami;
import com.saf.domain.Studenti;
import com.saf.repository.EsamiRepository;
//import com.saf.repository.search.EsamiSearchRepository;
import com.saf.service.dto.EsamiDTO;
import com.saf.service.dto.StudentiDTO;
import com.saf.service.mapper.EsamiMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


//import static org.elasticsearch.index.query.QueryBuilders.*;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.Optional;
/**
 * Service Implementation for managing Esami.
 */
@Service
@Transactional
public class EsamiServiceImpl implements EsamiService {

    private final Logger log = LoggerFactory.getLogger(EsamiServiceImpl.class);

    private final EsamiRepository esamiRepository;

    private final EsamiMapper esamiMapper;

   // private final EsamiSearchRepository esamiSearchRepository;
    
  

    public EsamiServiceImpl(EsamiRepository esamiRepository, EsamiMapper esamiMapper) {
        this.esamiRepository = esamiRepository;
        this.esamiMapper = esamiMapper;
  //      this.esamiSearchRepository = esamiSearchRepository;
    }

    /**
     * Save a esami.
     *
     * @param esamiDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public EsamiDTO save(EsamiDTO esamiDTO) {
        log.debug("Request to save Esami : {}", esamiDTO);
        Esami esami = esamiMapper.toEntity(esamiDTO);
        esami = esamiRepository.save(esami);
        EsamiDTO result = esamiMapper.toDto(esami);
 //       esamiSearchRepository.save(esami);
        return result;
    }

    /**
     * Get all the esamis.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<EsamiDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Esamis");
        return esamiRepository.findAll(pageable)
            .map(esamiMapper::toDto);
    }

    /**
     * Get one esami by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<EsamiDTO> findOne(Long id) {
        log.debug("Request to get Esami : {}", id);
        return esamiRepository.findById(id)
            .map(esamiMapper::toDto);
    }

    /**
     * Delete the esami by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Esami : {}", id);
        esamiRepository.deleteById(id);
//        esamiSearchRepository.delete(id);
    }

    /**
     * Search for the esami corresponding to the query.
     *
     * @param query the query of the search
     * @param pageable the pagination information
     * @return the list of entities
     */
//    @Override
//    @Transactional(readOnly = true)
//    public Page<EsamiDTO> search(Long sede, Pageable pageable) {
//        log.debug("Request to search for a page of Esamis for query {}", sede);
//        Page<Esami> result = esamiRepository.findByEsameRelNoteEsameSedi_Id(sede, pageable);
//        		//
//        return result.map(esamiMapper::toDto);
//    }
    
    @Override
    @Transactional(readOnly = true)
    public Page<EsamiDTO> searchbydata(Date fromdata,Date todata, Pageable pageable) {
        log.debug("Request to search for a page of Esamis for query {}", fromdata);
        LocalDate fdate = fromdata.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
    	LocalDate tdate = todata.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
        Page<Esami> result = esamiRepository.findByDataBetween(fdate, tdate, pageable);
        		//
        return result.map(esamiMapper::toDto);
    }
    
//    @Override
//    @Transactional(readOnly = true)
//    public Page<EsamiDTO> searchbysedeanddata(Long sede, Date fromdata,Date todata, Pageable pageable){
//    	log.debug("Request to search for a page of Esamis for query {}", fromdata);
//    	LocalDate fdate = fromdata.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
//    	LocalDate tdate = todata.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
//        Page<Esami> result = esamiRepository.findByEsameRelNoteEsameSedi_IdAndDataBetween(sede, fdate, tdate, pageable);
//     
//        return result.map(esamiMapper::toDto);
//    }
    
    @Override
	@Transactional(readOnly = true)
	public Page<EsamiDTO> searchbymateriaid(Long id, Pageable pageable) {
		 log.debug("Request to get esami for materia id ");
		 Page<Esami> result = esamiRepository.findByRelMatEsami_Id(id, pageable);
	        return result.map(esamiMapper::toDto);
		
	}
    
    
}
