package com.saf.repository;

import com.saf.domain.AnnoAccademico;
import com.saf.domain.Esami;

import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;


/**
 * Spring Data JPA repository for the AnnoAccademico entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AnnoAccademicoRepository extends JpaRepository<AnnoAccademico, Long> {
	//@Query("select distinct annoaccademico from AnnoAccademico annoaccademico where annoaccademico.descrizione like %:descrizione%")
	Page<AnnoAccademico> findByDescrizioneIgnoreCaseContaining(@Param("descrizione") String descrizione, Pageable pageable);
}
