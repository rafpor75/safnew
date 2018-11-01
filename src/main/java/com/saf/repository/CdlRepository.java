package com.saf.repository;

import com.saf.domain.Cdl;


import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;


/**
 * Spring Data JPA repository for the Cdl entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CdlRepository extends JpaRepository<Cdl, Long> {
	@Query("select distinct cdl from Cdl cdl join Facolta i on cdl.relCdlsFac.id = i.id where cdl.relCdlsFac.id =:id order by cdl.codice")
	Page<Cdl> findByFacoltaId(@Param("id") Long id, Pageable pageable);
	
	@Query("select distinct cdl from Cdl cdl join Facolta i on cdl.relCdlsFac.id = i.id where cdl.relCdlsFac.id =:id order by cdl.codice")
	List<Cdl> findByFacoltaId(@Param("id") Long id);
	
	@Query("select c from Cdl c where upper(c.codice) like  '%'||upper(:codice)||'%' or upper(c.nome) like '%'||upper(:nome)||'%' order by c.codice")
	Page<Cdl> findByCodiceOrNomeAllIgnoreCaseContaining(@Param("codice") String codice,@Param("nome") String nome, Pageable pageable);

	@Query("select distinct cdl from Cdl cdl order by cdl.codice")
	List<Cdl> findAll();
}
