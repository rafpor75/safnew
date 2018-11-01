package com.saf.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.saf.service.AnnoAccademicoService;
import com.saf.web.rest.errors.BadRequestAlertException;
import com.saf.web.rest.util.HeaderUtil;
import com.saf.web.rest.util.PaginationUtil;
import com.saf.service.dto.AnnoAccademicoDTO;
import com.saf.service.dto.StudentiDTO;

import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

//import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * REST controller for managing AnnoAccademico.
 */
@RestController
@RequestMapping("/api")
public class AnnoAccademicoResource {

    private final Logger log = LoggerFactory.getLogger(AnnoAccademicoResource.class);

    private static final String ENTITY_NAME = "annoAccademico";

    private final AnnoAccademicoService annoAccademicoService;

    public AnnoAccademicoResource(AnnoAccademicoService annoAccademicoService) {
        this.annoAccademicoService = annoAccademicoService;
    }

    /**
     * POST  /anno-accademicos : Create a new annoAccademico.
     *
     * @param annoAccademicoDTO the annoAccademicoDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new annoAccademicoDTO, or with status 400 (Bad Request) if the annoAccademico has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/anno-accademicos")
    @Timed
    public ResponseEntity<AnnoAccademicoDTO> createAnnoAccademico(@Valid @RequestBody AnnoAccademicoDTO annoAccademicoDTO) throws URISyntaxException {
        log.debug("REST request to save AnnoAccademico : {}", annoAccademicoDTO);
        if (annoAccademicoDTO.getId() != null) {
            throw new BadRequestAlertException("A new annoAccademico cannot already have an ID", ENTITY_NAME, "idexists");
        }
        AnnoAccademicoDTO result = annoAccademicoService.save(annoAccademicoDTO);
        return ResponseEntity.created(new URI("/api/anno-accademicos/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /anno-accademicos : Updates an existing annoAccademico.
     *
     * @param annoAccademicoDTO the annoAccademicoDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated annoAccademicoDTO,
     * or with status 400 (Bad Request) if the annoAccademicoDTO is not valid,
     * or with status 500 (Internal Server Error) if the annoAccademicoDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/anno-accademicos")
    @Timed
    public ResponseEntity<AnnoAccademicoDTO> updateAnnoAccademico(@Valid @RequestBody AnnoAccademicoDTO annoAccademicoDTO) throws URISyntaxException {
        log.debug("REST request to update AnnoAccademico : {}", annoAccademicoDTO);
        if (annoAccademicoDTO.getId() == null) {
            return createAnnoAccademico(annoAccademicoDTO);
        }
        AnnoAccademicoDTO result = annoAccademicoService.save(annoAccademicoDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, annoAccademicoDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /anno-accademicos : get all the annoAccademicos.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of annoAccademicos in body
     */
    @GetMapping("/anno-accademicos")
    @Timed
    public List<AnnoAccademicoDTO> getAllAnnoAccademicos() {
        log.debug("REST request to get all AnnoAccademicos");
        return annoAccademicoService.findAll();
        }

    /**
     * GET  /anno-accademicos/:id : get the "id" annoAccademico.
     *
     * @param id the id of the annoAccademicoDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the annoAccademicoDTO, or with status 404 (Not Found)
     */
    @GetMapping("/anno-accademicos/{id}")
    @Timed
    public ResponseEntity<AnnoAccademicoDTO> getAnnoAccademico(@PathVariable Long id) {
        log.debug("REST request to get AnnoAccademico : {}", id);
        Optional<AnnoAccademicoDTO> annoAccademicoDTO = annoAccademicoService.findOne(id);
        return ResponseUtil.wrapOrNotFound(annoAccademicoDTO);
    }

    /**
     * DELETE  /anno-accademicos/:id : delete the "id" annoAccademico.
     *
     * @param id the id of the annoAccademicoDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/anno-accademicos/{id}")
    @Timed
    public ResponseEntity<Void> deleteAnnoAccademico(@PathVariable Long id) {
        log.debug("REST request to delete AnnoAccademico : {}", id);
        annoAccademicoService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * SEARCH  /_search/anno-accademicos?query=:query : search for the annoAccademico corresponding
     * to the query.
     *
     * @param query the query of the annoAccademico search
     * @return the result of the search
     */
//    @GetMapping("/_search/anno-accademicos")
//    @Timed
//    public List<AnnoAccademicoDTO> searchAnnoAccademicos(@RequestParam String query) {
//        log.debug("REST request to search AnnoAccademicos for query {}", query);
//        return annoAccademicoService.search(query);
//    }
    
    @GetMapping("/_search/anno-accademicos-bydescrizione")
    @Timed
    public ResponseEntity<List<AnnoAccademicoDTO>> searchAnnoAccademicosByDescrizione(@RequestParam String query, Pageable pageable) {
        
        log.debug("REST request to search for a page of Studenti for descrizione: {}", query);
        Page<AnnoAccademicoDTO> page = annoAccademicoService.findByDescrizione(query, pageable);
        HttpHeaders headers = PaginationUtil.generateSearchPaginationHttpHeaders(query, page, "/_search/anno-accademicos-bydescrizione");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
        
        
    }
    
}
