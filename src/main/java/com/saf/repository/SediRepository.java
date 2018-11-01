package com.saf.repository;

import com.saf.domain.Sedi;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Sedi entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SediRepository extends JpaRepository<Sedi, Long> {

}
