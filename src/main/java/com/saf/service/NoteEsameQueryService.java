package com.saf.service;

import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specifications;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.github.jhipster.service.QueryService;

import com.saf.domain.NoteEsame;
import com.saf.domain.*; // for static metamodels
import com.saf.repository.NoteEsameRepository;

import com.saf.service.dto.NoteEsameCriteria;

import com.saf.service.dto.NoteEsameDTO;
import com.saf.service.mapper.NoteEsameMapper;

/**
 * Service for executing complex queries for NoteEsame entities in the database.
 * The main input is a {@link NoteEsameCriteria} which get's converted to {@link Specifications},
 * in a way that all the filters must apply.
 * It returns a {@link List} of {@link NoteEsameDTO} or a {@link Page} of {@link NoteEsameDTO} which fulfills the criteria.
 */
@Service
@Transactional(readOnly = true)
public class NoteEsameQueryService extends QueryService<NoteEsame> {

    private final Logger log = LoggerFactory.getLogger(NoteEsameQueryService.class);


    private final NoteEsameRepository noteEsameRepository;

    private final NoteEsameMapper noteEsameMapper;

  //  private final NoteEsameSearchRepository noteEsameSearchRepository;

    public NoteEsameQueryService(NoteEsameRepository noteEsameRepository, NoteEsameMapper noteEsameMapper) {
        this.noteEsameRepository = noteEsameRepository;
        this.noteEsameMapper = noteEsameMapper;
    //    this.noteEsameSearchRepository = noteEsameSearchRepository;
    }

    /**
     * Return a {@link List} of {@link NoteEsameDTO} which matches the criteria from the database
     * @param criteria The object which holds all the filters, which the entities should match.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public List<NoteEsameDTO> findByCriteria(NoteEsameCriteria criteria) {
        log.debug("find by criteria : {}", criteria);
        final Specifications<NoteEsame> specification = createSpecification(criteria);
        return noteEsameMapper.toDto(noteEsameRepository.findAll(specification));
    }

    /**
     * Return a {@link Page} of {@link NoteEsameDTO} which matches the criteria from the database
     * @param criteria The object which holds all the filters, which the entities should match.
     * @param page The page, which should be returned.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public Page<NoteEsameDTO> findByCriteria(NoteEsameCriteria criteria, Pageable page) {
        log.debug("find by criteria : {}, page: {}", criteria, page);
        final Specifications<NoteEsame> specification = createSpecification(criteria);
        final Page<NoteEsame> result = noteEsameRepository.findAll(specification, page);
        return result.map(noteEsameMapper::toDto);
    }

    /**
     * Function to convert NoteEsameCriteria to a {@link Specifications}
     */
    private Specifications<NoteEsame> createSpecification(NoteEsameCriteria criteria) {
        Specifications<NoteEsame> specification = Specifications.where(null);
        if (criteria != null) {
            if (criteria.getId() != null) {
                specification = specification.and(buildSpecification(criteria.getId(), NoteEsame_.id));
            }
            if (criteria.getAppunti() != null) {
                specification = specification.and(buildStringSpecification(criteria.getAppunti(), NoteEsame_.appunti));
            }
            if (criteria.getDataDispensa() != null) {
                specification = specification.and(buildRangeSpecification(criteria.getDataDispensa(), NoteEsame_.dataDispensa));
            }
            if (criteria.getDataCorsi() != null) {
                specification = specification.and(buildRangeSpecification(criteria.getDataCorsi(), NoteEsame_.dataCorsi));
            }
            if (criteria.getDataABI() != null) {
                specification = specification.and(buildRangeSpecification(criteria.getDataABI(), NoteEsame_.dataABI));
            }
            if (criteria.getDataRiepilogo() != null) {
                specification = specification.and(buildRangeSpecification(criteria.getDataRiepilogo(), NoteEsame_.dataRiepilogo));
            }
            if (criteria.getOraEsame() != null) {
                specification = specification.and(buildRangeSpecification(criteria.getOraEsame(), NoteEsame_.oraEsame));
            }
            if (criteria.getCostoEsame() != null) {
                specification = specification.and(buildRangeSpecification(criteria.getCostoEsame(), NoteEsame_.costoEsame));
            }
            if (criteria.getFasce() != null) {
                specification = specification.and(buildStringSpecification(criteria.getFasce(), NoteEsame_.fasce));
            }
            if (criteria.getPiva() != null) {
                specification = specification.and(buildStringSpecification(criteria.getPiva(), NoteEsame_.piva));
            }
            if (criteria.getFattura() != null) {
                specification = specification.and(buildSpecification(criteria.getFattura(), NoteEsame_.fattura));
            }
            if (criteria.getNoteFattura() != null) {
                specification = specification.and(buildStringSpecification(criteria.getNoteFattura(), NoteEsame_.noteFattura));
            }
            if (criteria.getEmailInviata() != null) {
                specification = specification.and(buildSpecification(criteria.getEmailInviata(), NoteEsame_.emailInviata));
            }
            if (criteria.getRelNoteStudId() != null) {
                specification = specification.and(buildReferringEntitySpecification(criteria.getRelNoteStudId(), NoteEsame_.relNoteStud, Studenti_.id));
            }
            if (criteria.getRelNoteEsamiId() != null) {
                specification = specification.and(buildReferringEntitySpecification(criteria.getRelNoteEsamiId(), NoteEsame_.relNoteEsami, Esami_.id));
            }
        }
        return specification;
    }

}
