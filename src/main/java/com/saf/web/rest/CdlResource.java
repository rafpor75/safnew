package com.saf.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.saf.repository.CdlRepository;
import com.saf.repository.SediRepository;
import com.saf.service.CdlService;
import com.saf.web.rest.errors.BadRequestAlertException;
import com.saf.web.rest.util.HeaderUtil;
import com.saf.web.rest.util.PaginationUtil;
import com.saf.service.dto.AnnoAccademicoDTO;
import com.saf.service.dto.CdlDTO;
import com.saf.service.dto.SediDTO;
import com.saf.service.mapper.CdlMapper;
import com.saf.service.mapper.SediMapper;

import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

//import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * REST controller for managing Cdl.
 */
@RestController
@RequestMapping("/api")
public class CdlResource {

    private final Logger log = LoggerFactory.getLogger(CdlResource.class);

    private static final String ENTITY_NAME = "cdl";

    private final CdlService cdlService;

    private final CdlRepository cdlRepository;

    private final CdlMapper cdlMapper;
    
    public CdlResource(CdlService cdlService, CdlRepository cdlRepository, CdlMapper cdlMapper) {
        this.cdlService = cdlService;
        this.cdlRepository = cdlRepository;
        this.cdlMapper = cdlMapper;
        
    }

    /**
     * POST  /cdls : Create a new cdl.
     *
     * @param cdlDTO the cdlDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new cdlDTO, or with status 400 (Bad Request) if the cdl has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/cdls")
    @Timed
    public ResponseEntity<CdlDTO> createCdl(@Valid @RequestBody CdlDTO cdlDTO) throws URISyntaxException {
        log.debug("REST request to save Cdl : {}", cdlDTO);
        if (cdlDTO.getId() != null) {
            throw new BadRequestAlertException("A new cdl cannot already have an ID", ENTITY_NAME, "idexists");
        }
        CdlDTO result = cdlService.save(cdlDTO);
        return ResponseEntity.created(new URI("/api/cdls/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /cdls : Updates an existing cdl.
     *
     * @param cdlDTO the cdlDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated cdlDTO,
     * or with status 400 (Bad Request) if the cdlDTO is not valid,
     * or with status 500 (Internal Server Error) if the cdlDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/cdls")
    @Timed
    public ResponseEntity<CdlDTO> updateCdl(@Valid @RequestBody CdlDTO cdlDTO) throws URISyntaxException {
        log.debug("REST request to update Cdl : {}", cdlDTO);
        if (cdlDTO.getId() == null) {
            return createCdl(cdlDTO);
        }
        CdlDTO result = cdlService.save(cdlDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, cdlDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /cdls : get all the cdls.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of cdls in body
     */
    @GetMapping("/cdls")
    @Timed
    public ResponseEntity<List<CdlDTO>> getAllCdls(Pageable pageable) {
        log.debug("REST request to get a page of Cdls");
        Page<CdlDTO> page = cdlService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/cdls");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }
    
    /**
     * GET  /cdls : get all the cdls by facolta id.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of cdls in body
     */
    @GetMapping("/cdls/facoltas/{facoltaId}")
    @Timed
    public ResponseEntity<List<CdlDTO>> getAllCdlsForFacolta( @PathVariable Long facoltaId, Pageable pageable) {
        log.debug("REST request to get a page of Cdls");
        Page<CdlDTO> page = cdlService.findByFacoltaId(facoltaId, pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/cdls/facoltas/{facoltaId}");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }
   
    @GetMapping("/cdls/listfacoltas/{facoltaId}")
    @Timed
    public List<CdlDTO> getAllCdlsForFacolta( @PathVariable Long facoltaId) {
        log.debug("REST request to get a page of Cdls");
        return  cdlService.findByFacoltaId(facoltaId);

        
    }

    /**
     * GET  /cdls/:id : get the "id" cdl.
     *
     * @param id the id of the cdlDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the cdlDTO, or with status 404 (Not Found)
     */
    @GetMapping("/cdls/{id}")
    @Timed
    public ResponseEntity<CdlDTO> getCdl(@PathVariable Long id) {
        log.debug("REST request to get Cdl : {}", id);
        Optional<CdlDTO> cdlDTO = cdlService.findOne(id);
        return ResponseUtil.wrapOrNotFound(cdlDTO);
    }
    
    

    /**
     * DELETE  /cdls/:id : delete the "id" cdl.
     *
     * @param id the id of the cdlDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/cdls/{id}")
    @Timed
    public ResponseEntity<Void> deleteCdl(@PathVariable Long id) {
        log.debug("REST request to delete Cdl : {}", id);
        cdlService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * SEARCH  /_search/cdls?query=:query : search for the cdl corresponding
     * to the query.
     *
     * @param query the query of the cdl search
     * @param pageable the pagination information
     * @return the result of the search
     */
//    @GetMapping("/_search/cdls")
//    @Timed
//    public ResponseEntity<List<CdlDTO>> searchCdls(@RequestParam String query, Pageable pageable) {
//        log.debug("REST request to search for a page of Cdls for query {}", query);
//        Page<CdlDTO> page = cdlService.search(query, pageable);
//        HttpHeaders headers = PaginationUtil.generateSearchPaginationHttpHeaders(query, page, "/api/_search/cdls");
//        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
//    }

    @GetMapping("/_search/cdls-bycodice-or-nome")
    @Timed
    public ResponseEntity<List<CdlDTO>> searchCdlsByCodiceOrNome(@RequestParam String query, Pageable pageable) {
        
        log.debug("REST request to search for a page of Studenti for descrizione: {}", query);
        Page<CdlDTO> page = cdlService.findByCodiceOrNome(query, pageable);
        HttpHeaders headers = PaginationUtil.generateSearchPaginationHttpHeaders(query, page, "/_search/cdls-bycodice-or-nome");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
        
        
    }
    
  @GetMapping("/_search/allcdls")
  @Timed
  @Transactional(readOnly = true)
  public List<CdlDTO> findAll() {
      log.debug("Request to get all Sedis");
      return cdlRepository.findAll().stream()
          .map(cdlMapper::toDto)
          .collect(Collectors.toCollection(LinkedList::new));
  }
    
}
