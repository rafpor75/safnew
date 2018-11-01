package com.saf.repository;

import com.saf.domain.Cdl;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Cdl entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CdlRepository extends JpaRepository<Cdl, Long> {

}
