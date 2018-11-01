package com.saf.service.impl;

import com.saf.service.CdlService;

import com.saf.domain.Cdl;
import com.saf.repository.CdlRepository;

import com.saf.service.dto.CdlDTO;
import com.saf.service.dto.SediDTO;
import com.saf.service.mapper.CdlMapper;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing Cdl.
 */
@Service
@Transactional
public class CdlServiceImpl implements CdlService {

	private final Logger log = LoggerFactory.getLogger(CdlServiceImpl.class);

	private final CdlRepository cdlRepository;

	private final CdlMapper cdlMapper;

	// private final CdlSearchRepository cdlSearchRepository;

	public CdlServiceImpl(CdlRepository cdlRepository, CdlMapper cdlMapper) {
		this.cdlRepository = cdlRepository;
		this.cdlMapper = cdlMapper;
		// this.cdlSearchRepository = cdlSearchRepository;
	}

	/**
	 * Save a cdl.
	 *
	 * @param cdlDTO
	 *            the entity to save
	 * @return the persisted entity
	 */
	@Override
	public CdlDTO save(CdlDTO cdlDTO) {
		log.debug("Request to save Cdl : {}", cdlDTO);
		Cdl cdl = cdlMapper.toEntity(cdlDTO);
		cdl = cdlRepository.save(cdl);
		CdlDTO result = cdlMapper.toDto(cdl);
		// cdlSearchRepository.save(cdl);
		return result;
	}

	/**
	 * Get all the cdls.
	 *
	 * @param pageable
	 *            the pagination information
	 * @return the list of entities
	 */
	@Override
	@Transactional(readOnly = true)
	public Page<CdlDTO> findAll(Pageable pageable) {
		log.debug("Request to get all Cdls");
		return cdlRepository.findAll(pageable).map(cdlMapper::toDto);
	}

	/**
	 * Get one cdl by id.
	 *
	 * @param id
	 *            the id of the entity
	 * @return the entity
	 */
	@Override
	@Transactional(readOnly = true)
	public Optional<CdlDTO> findOne(Long id) {
		log.debug("Request to get Cdl : {}", id);
		
		return cdlRepository.findById(id)
	            .map(cdlMapper::toDto);
	}

	/**
	 * Delete the cdl by id.
	 *
	 * @param id
	 *            the id of the entity
	 */
	@Override
	public void delete(Long id) {
		log.debug("Request to delete Cdl : {}", id);
		cdlRepository.deleteById(id);
		// cdlSearchRepository.delete(id);
	}

	/**
	 * Search for the cdl corresponding to the query.
	 *
	 * @param query
	 *            the query of the search
	 * @param pageable
	 *            the pagination information
	 * @return the list of entities
	 */
	// @Override
	// @Transactional(readOnly = true)
	// public Page<CdlDTO> search(String query, Pageable pageable) {
	// log.debug("Request to search for a page of Cdls for query {}", query);
	// Page<Cdl> result = cdlSearchRepository.search(queryStringQuery(query),
	// pageable);
	// return result.map(cdlMapper::toDto);
	// }

	@Override
	@Transactional(readOnly = true)
	public Page<CdlDTO> findByFacoltaId(Long facoltaId, Pageable pageable) {
		log.debug("Request to get Cdls for facolta id ");
		Page<Cdl> result = cdlRepository.findByFacoltaId(facoltaId, pageable);
		return result.map(cdlMapper::toDto);

	}

	@Override
	@Transactional(readOnly = true)
	public Page<CdlDTO> findByCodiceOrNome(String descrizione, Pageable pageable) {
		log.debug("Request to get Materie for cdl id ");
		Page<Cdl> result = cdlRepository.findByCodiceOrNomeAllIgnoreCaseContaining(descrizione, descrizione, pageable);
		return result.map(cdlMapper::toDto);
	}

	@Override
	@Transactional(readOnly = true)
	public List<CdlDTO> findByFacoltaId(Long facoltaId) {
		log.debug("Request to get Cdls List for facolta id ");
		return cdlRepository.findByFacoltaId(facoltaId).stream().map(cdlMapper::toDto)
				.collect(Collectors.toCollection(LinkedList::new));

	}
	@Override
	@Transactional(readOnly = true)
	public List<CdlDTO> findAll() {
		log.debug("Request to get Cdls List for facolta id ");
		return cdlRepository.findAll().stream().map(cdlMapper::toDto)
				.collect(Collectors.toCollection(LinkedList::new));

	}
	

}
