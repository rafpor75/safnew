package com.saf.repository;


import com.saf.domain.Cdl;
import com.saf.domain.Materie;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;


/**
 * Spring Data JPA repository for the Materie entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MaterieRepository extends JpaRepository<Materie, Long> {

		@Query("select distinct materie from Materie materie join Cdl i on materie.relMatsCdl.id = i.id where materie.relMatsCdl.id =:id order by materie.nome")	
		Page<Materie> findByCdlId(@Param("id") Long id, Pageable pageable);
		
		@Query("select distinct materie from Materie materie join Cdl i on materie.relMatsCdl.id = i.id where materie.relMatsCdl.id =:id order by materie.nome")
		List<Materie> findByCdlId(@Param("id") Long id);
		
		@Query("select c from Materie c where upper(c.nome) like  '%'||upper(:nome)||'%' order by c.nome")
		Page<Materie> findByNome(@Param("nome") String nome, Pageable pageable);
}
