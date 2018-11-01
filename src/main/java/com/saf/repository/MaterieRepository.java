package com.saf.repository;

import com.saf.domain.Materie;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Materie entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MaterieRepository extends JpaRepository<Materie, Long> {

}
