package com.saf.repository;


import com.saf.domain.Docenti;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;


/**
 * Spring Data JPA repository for the Docenti entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DocentiRepository extends JpaRepository<Docenti, Long> {
	@Query("select c from Docenti c where upper(c.nome) like  '%'||upper(:nome)||'%' or upper(c.cognome) like '%'||upper(:cognome)||'%'")
	Page<Docenti> findByNomeOrCognome(@Param("nome") String nome,@Param("cognome") String cognome, Pageable pageable);
}
