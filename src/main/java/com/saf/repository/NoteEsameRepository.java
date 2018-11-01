package com.saf.repository;

import com.saf.domain.NoteEsame;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the NoteEsame entity.
 */
@SuppressWarnings("unused")
@Repository
public interface NoteEsameRepository extends JpaRepository<NoteEsame, Long> {

}
