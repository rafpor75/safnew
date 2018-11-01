package com.saf.web.rest;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.codahale.metrics.annotation.Timed;
import com.saf.service.TutorService;
import com.saf.service.dto.TutorDTO;
import com.saf.web.rest.errors.BadRequestAlertException;
import com.saf.web.rest.util.HeaderUtil;
import com.saf.web.rest.util.PaginationUtil;

import io.github.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing Tutor.
 */
@RestController
@RequestMapping("/api")
public class TutorResource {

    private final Logger log = LoggerFactory.getLogger(TutorResource.class);

    private static final String ENTITY_NAME = "tutor";

    private final TutorService tutorService;

    public TutorResource(TutorService tutorService) {
        this.tutorService = tutorService;
    }

    /**
     * POST  /tutors : Create a new tutor.
     *
     * @param tutorDTO the tutorDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new tutorDTO, or with status 400 (Bad Request) if the tutor has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/tutors")
    @Timed
    public ResponseEntity<TutorDTO> createTutor(@Valid @RequestBody TutorDTO tutorDTO) throws URISyntaxException {
        log.debug("REST request to save Tutor : {}", tutorDTO);
        if (tutorDTO.getId() != null) {
            throw new BadRequestAlertException("A new tutor cannot already have an ID", ENTITY_NAME, "idexists");
        }
        TutorDTO result = tutorService.save(tutorDTO);
        return ResponseEntity.created(new URI("/api/tutors/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /tutors : Updates an existing tutor.
     *
     * @param tutorDTO the tutorDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated tutorDTO,
     * or with status 400 (Bad Request) if the tutorDTO is not valid,
     * or with status 500 (Internal Server Error) if the tutorDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/tutors")
    @Timed
    public ResponseEntity<TutorDTO> updateTutor(@Valid @RequestBody TutorDTO tutorDTO) throws URISyntaxException {
        log.debug("REST request to update Tutor : {}", tutorDTO);
        if (tutorDTO.getId() == null) {
            return createTutor(tutorDTO);
        }
        TutorDTO result = tutorService.save(tutorDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, tutorDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /tutors : get all the tutors.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of tutors in body
     */
    @GetMapping("/tutors")
    @Timed
    public ResponseEntity<List<TutorDTO>> getAllTutors(Pageable pageable) {
        log.debug("REST request to get a page of Tutors");
        Page<TutorDTO> page = tutorService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/tutors");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /tutors/:id : get the "id" tutor.
     *
     * @param id the id of the tutorDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the tutorDTO, or with status 404 (Not Found)
     */
    @GetMapping("/tutors/{id}")
    @Timed
    public ResponseEntity<TutorDTO> getTutor(@PathVariable Long id) {
        log.debug("REST request to get Tutor : {}", id);
        Optional<TutorDTO> tutorDTO = tutorService.findOne(id);
        return ResponseUtil.wrapOrNotFound(tutorDTO);
    }

    /**
     * DELETE  /tutors/:id : delete the "id" tutor.
     *
     * @param id the id of the tutorDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/tutors/{id}")
    @Timed
    public ResponseEntity<Void> deleteTutor(@PathVariable Long id) {
        log.debug("REST request to delete Tutor : {}", id);
        tutorService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * SEARCH  /_search/tutors?query=:query : search for the tutor corresponding
     * to the query.
     *
     * @param query the query of the tutor search
     * @param pageable the pagination information
     * @return the result of the search
     */
    @GetMapping("/_search/tutors")
    @Timed
    public ResponseEntity<List<TutorDTO>> searchTutors(@RequestParam String query, Pageable pageable) {
        log.debug("REST request to search for a page of Tutors for query {}", query);
        Page<TutorDTO> page = tutorService.findByNomeOrCognome(query, pageable);
        HttpHeaders headers = PaginationUtil.generateSearchPaginationHttpHeaders(query, page, "/api/_search/tutors");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

}
