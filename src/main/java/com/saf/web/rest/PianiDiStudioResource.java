package com.saf.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.saf.service.PianiDiStudioService;
import com.saf.service.StudentiService;
import com.saf.web.rest.errors.BadRequestAlertException;
import com.saf.web.rest.util.HeaderUtil;
import com.saf.web.rest.util.PaginationUtil;
import com.saf.service.dto.PianiDiStudioDTO;
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

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;
//import java.util.stream.StreamSupport;

//import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * REST controller for managing PianiDiStudio.
 */
@RestController
@RequestMapping("/api")
public class PianiDiStudioResource {

    private final Logger log = LoggerFactory.getLogger(PianiDiStudioResource.class);

    private static final String ENTITY_NAME = "pianiDiStudio";

    private final PianiDiStudioService pianiDiStudioService;
    
    private final StudentiService studentiService;

    public PianiDiStudioResource(PianiDiStudioService pianiDiStudioService, StudentiService studentiService) {
        this.pianiDiStudioService = pianiDiStudioService;
        this.studentiService = studentiService;
    }

    /**
     * POST  /piani-di-studios : Create a new pianiDiStudio.
     *
     * @param pianiDiStudioDTO the pianiDiStudioDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new pianiDiStudioDTO, or with status 400 (Bad Request) if the pianiDiStudio has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/piani-di-studios")
    @Timed
    public ResponseEntity<PianiDiStudioDTO> createPianiDiStudio(@RequestBody PianiDiStudioDTO pianiDiStudioDTO) throws URISyntaxException {
        log.debug("REST request to save PianiDiStudio : {}", pianiDiStudioDTO);
        if (pianiDiStudioDTO.getId() != null) {
            throw new BadRequestAlertException("A new pianiDiStudio cannot already have an ID", ENTITY_NAME, "idexists");
        }
        PianiDiStudioDTO result = pianiDiStudioService.save(pianiDiStudioDTO);
        return ResponseEntity.created(new URI("/api/piani-di-studios/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /piani-di-studios : Updates an existing pianiDiStudio.
     *
     * @param pianiDiStudioDTO the pianiDiStudioDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated pianiDiStudioDTO,
     * or with status 400 (Bad Request) if the pianiDiStudioDTO is not valid,
     * or with status 500 (Internal Server Error) if the pianiDiStudioDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/piani-di-studios")
    @Timed
    public ResponseEntity<PianiDiStudioDTO> updatePianiDiStudio(@RequestBody PianiDiStudioDTO pianiDiStudioDTO) throws URISyntaxException {
        log.debug("REST request to update PianiDiStudio : {}", pianiDiStudioDTO);
        if (pianiDiStudioDTO.getId() == null) {
            return createPianiDiStudio(pianiDiStudioDTO);
        }
        PianiDiStudioDTO result = pianiDiStudioService.save(pianiDiStudioDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, pianiDiStudioDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /piani-di-studios : get all the pianiDiStudios.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of pianiDiStudios in body
     */
    @GetMapping("/piani-di-studios")
    @Timed
    public ResponseEntity<List<PianiDiStudioDTO>> getAllPianiDiStudios(Pageable pageable) {
        log.debug("REST request to get a page of PianiDiStudios");
        Page<PianiDiStudioDTO> page = pianiDiStudioService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/piani-di-studios");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /piani-di-studios/:id : get the "id" pianiDiStudio.
     *
     * @param id the id of the pianiDiStudioDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the pianiDiStudioDTO, or with status 404 (Not Found)
     */
    @GetMapping("/piani-di-studios/{id}")
    @Timed
    public ResponseEntity<PianiDiStudioDTO> getPianiDiStudio(@PathVariable Long id) {
        log.debug("REST request to get PianiDiStudio : {}", id);
        Optional<PianiDiStudioDTO> pianiDiStudioDTO = pianiDiStudioService.findOne(id);
        return ResponseUtil.wrapOrNotFound(pianiDiStudioDTO);
    }

    /**
     * DELETE  /piani-di-studios/:id : delete the "id" pianiDiStudio.
     *
     * @param id the id of the pianiDiStudioDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/piani-di-studios/{id}")
    @Timed
    public ResponseEntity<Void> deletePianiDiStudio(@PathVariable Long id) {
        log.debug("REST request to delete PianiDiStudio : {}", id);
        pianiDiStudioService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * SEARCH  /_search/piani-di-studios?query=:query : search for the pianiDiStudio corresponding
     * to the query.
     *
     * @param query the query of the pianiDiStudio search
     * @param pageable the pagination information
     * @return the result of the search
     */
//    @GetMapping("/_search/piani-di-studios")
//    @Timed
//    public ResponseEntity<List<PianiDiStudioDTO>> searchPianiDiStudios(@RequestParam String query, Pageable pageable) {
//        log.debug("REST request to search for a page of PianiDiStudios for query {}", query);
//        Page<PianiDiStudioDTO> page = pianiDiStudioService.search(query, pageable);
//        HttpHeaders headers = PaginationUtil.generateSearchPaginationHttpHeaders(query, page, "/api/_search/piani-di-studios");
//        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
//    }
    
    @GetMapping("/piani-di-studios/cdl/{id}")
    @Timed
    public ResponseEntity<List<PianiDiStudioDTO>> searchPianiDiStudiosByCdl(@PathVariable Long id, Pageable pageable) {
        log.debug("REST request to search for a page of PianiDiStudios for cdl id: {}", id);
        Page<PianiDiStudioDTO> page = pianiDiStudioService.findAllByCdlId(id, pageable);
        HttpHeaders headers = PaginationUtil.generateSearchPaginationHttpHeaders(id.toString(), page, "/piani-di-studios/cdl/{id}");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }
    @GetMapping("/piani-di-studios/stu/{id}")
    @Timed
    public ResponseEntity<List<PianiDiStudioDTO>> searchPianiDiStudiosByStu(@PathVariable Long id, Pageable pageable) {
        log.debug("REST request to search for a page of PianiDiStudios for cdl id: {}", id);
        Page<PianiDiStudioDTO> page = pianiDiStudioService.findAllByStuId(id, pageable);
        HttpHeaders headers = PaginationUtil.generateSearchPaginationHttpHeaders(id.toString(), page, "/piani-di-studios/stu/{id}");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }
    
    
    

}
