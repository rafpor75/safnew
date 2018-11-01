package com.saf.repository;


import com.saf.domain.Sedi;

import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;


/**
 * Spring Data JPA repository for the Sedi entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SediRepository extends JpaRepository<Sedi, Long> {
	@Query("select c from Sedi c where upper(c.sede) like  '%'||upper(:sede)||'%'")
	Page<Sedi> findByNome(@Param("sede") String sede, Pageable pageable);
}
