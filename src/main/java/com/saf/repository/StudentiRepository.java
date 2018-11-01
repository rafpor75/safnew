package com.saf.repository;

import com.saf.domain.Studenti;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Studenti entity.
 */
@SuppressWarnings("unused")
@Repository
public interface StudentiRepository extends JpaRepository<Studenti, Long> {

}
