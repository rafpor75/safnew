package com.saf.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.saf.service.EsamiService;
import com.saf.web.rest.errors.BadRequestAlertException;
import com.saf.web.rest.util.HeaderUtil;
import com.saf.web.rest.util.PaginationUtil;
import com.saf.service.dto.EsamiDTO;
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

/**
 * REST controller for managing Esami.
 */
@RestController
@RequestMapping("/api")
public class EsamiResource {

    private final Logger log = LoggerFactory.getLogger(EsamiResource.class);

    private static final String ENTITY_NAME = "esami";

    private EsamiService esamiService;

    public EsamiResource(EsamiService esamiService) {
        this.esamiService = esamiService;
    }

    /**
     * POST  /esamis : Create a new esami.
     *
     * @param esamiDTO the esamiDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new esamiDTO, or with status 400 (Bad Request) if the esami has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/esamis")
    @Timed
    public ResponseEntity<EsamiDTO> createEsami(@RequestBody EsamiDTO esamiDTO) throws URISyntaxException {
        log.debug("REST request to save Esami : {}", esamiDTO);
        if (esamiDTO.getId() != null) {
            throw new BadRequestAlertException("A new esami cannot already have an ID", ENTITY_NAME, "idexists");
        }
        EsamiDTO result = esamiService.save(esamiDTO);
        return ResponseEntity.created(new URI("/api/esamis/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /esamis : Updates an existing esami.
     *
     * @param esamiDTO the esamiDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated esamiDTO,
     * or with status 400 (Bad Request) if the esamiDTO is not valid,
     * or with status 500 (Internal Server Error) if the esamiDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/esamis")
    @Timed
    public ResponseEntity<EsamiDTO> updateEsami(@RequestBody EsamiDTO esamiDTO) throws URISyntaxException {
        log.debug("REST request to update Esami : {}", esamiDTO);
        if (esamiDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        EsamiDTO result = esamiService.save(esamiDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, esamiDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /esamis : get all the esamis.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of esamis in body
     */
    @GetMapping("/esamis")
    @Timed
    public ResponseEntity<List<EsamiDTO>> getAllEsamis(Pageable pageable) {
        log.debug("REST request to get a page of Esamis");
        Page<EsamiDTO> page = esamiService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/esamis");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /esamis/:id : get the "id" esami.
     *
     * @param id the id of the esamiDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the esamiDTO, or with status 404 (Not Found)
     */
    @GetMapping("/esamis/{id}")
    @Timed
    public ResponseEntity<EsamiDTO> getEsami(@PathVariable Long id) {
        log.debug("REST request to get Esami : {}", id);
        Optional<EsamiDTO> esamiDTO = esamiService.findOne(id);
        return ResponseUtil.wrapOrNotFound(esamiDTO);
    }

    /**
     * DELETE  /esamis/:id : delete the "id" esami.
     *
     * @param id the id of the esamiDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/esamis/{id}")
    @Timed
    public ResponseEntity<Void> deleteEsami(@PathVariable Long id) {
        log.debug("REST request to delete Esami : {}", id);
        esamiService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
