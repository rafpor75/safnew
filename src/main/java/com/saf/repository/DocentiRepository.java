package com.saf.repository;

import com.saf.domain.Docenti;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Docenti entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DocentiRepository extends JpaRepository<Docenti, Long> {

}
