package com.saf.repository;

import com.saf.domain.Facolta;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Facolta entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FacoltaRepository extends JpaRepository<Facolta, Long> {

}
