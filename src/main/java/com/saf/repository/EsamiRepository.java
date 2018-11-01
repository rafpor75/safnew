package com.saf.repository;

import com.saf.domain.Esami;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Esami entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EsamiRepository extends JpaRepository<Esami, Long> {

}
