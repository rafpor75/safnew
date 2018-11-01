package com.saf.repository;

import com.saf.domain.AnnoAccademico;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the AnnoAccademico entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AnnoAccademicoRepository extends JpaRepository<AnnoAccademico, Long> {

}
