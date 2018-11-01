package com.saf.repository;


import com.saf.domain.Facolta;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;


/**
 * Spring Data JPA repository for the Facolta entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FacoltaRepository extends JpaRepository<Facolta, Long> {
	@Query("select c from Facolta c where upper(c.nome) like  '%'||upper(:nome)||'%'")
	Page<Facolta> findByNome(@Param("nome") String nome, Pageable pageable);

}
