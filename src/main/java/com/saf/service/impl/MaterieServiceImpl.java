package com.saf.service.impl;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.saf.domain.Materie;
import com.saf.repository.MaterieRepository;
import com.saf.service.MaterieService;
import com.saf.service.dto.CdlDTO;
import com.saf.service.dto.MaterieDTO;
import com.saf.service.mapper.MaterieMapper;

/**
 * Service Implementation for managing Materie.
 */
@Service
@Transactional
public class MaterieServiceImpl implements MaterieService {

    private final Logger log = LoggerFactory.getLogger(MaterieServiceImpl.class);

    private final MaterieRepository materieRepository;

    private final MaterieMapper materieMapper;

 //   private final MaterieSearchRepository materieSearchRepository;

    public MaterieServiceImpl(MaterieRepository materieRepository, MaterieMapper materieMapper) {
        this.materieRepository = materieRepository;
        this.materieMapper = materieMapper;
    //    this.materieSearchRepository = materieSearchRepository;
    }

    /**
     * Save a materie.
     *
     * @param materieDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public MaterieDTO save(MaterieDTO materieDTO) {
        log.debug("Request to save Materie : {}", materieDTO);
        Materie materie = materieMapper.toEntity(materieDTO);
        materie = materieRepository.save(materie);
        MaterieDTO result = materieMapper.toDto(materie);
   //     materieSearchRepository.save(materie);
        return result;
    }

    /**
     * Get all the materies.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<MaterieDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Materies");
        return materieRepository.findAll(pageable)
            .map(materieMapper::toDto);
    }

    /**
     * Get one materie by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<MaterieDTO> findOne(Long id) {
        log.debug("Request to get Materie : {}", id);
        return materieRepository.findById(id)
            .map(materieMapper::toDto);
    }

    /**
     * Delete the materie by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Materie : {}", id);
        materieRepository.deleteById(id);
   //     materieSearchRepository.delete(id);
    }

    /**
     * Search for the materie corresponding to the query.
     *
     * @param query the query of the search
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<MaterieDTO> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Materies for query {}", query);
        Page<Materie> result = materieRepository.findByNome(query, pageable);
        return result.map(materieMapper::toDto);
    }
    
    @Override
    public Page<MaterieDTO> findByCdlId(Long cdlId, Pageable pageable){
    	 log.debug("Request to get Materie for cdl id ");
		 Page<Materie> result = materieRepository.findByCdlId(cdlId, pageable);
	        return result.map(materieMapper::toDto);
    }
    @Override
	@Transactional(readOnly = true)
	public List<MaterieDTO> findByCdlId(Long facoltaId) {
		log.debug("Request to get Cdls List for facolta id ");
		return materieRepository.findByCdlId(facoltaId).stream().map(materieMapper::toDto)
				.collect(Collectors.toCollection(LinkedList::new));

	}
}
