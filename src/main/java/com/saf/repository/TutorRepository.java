package com.saf.repository;



import com.saf.domain.Tutor;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;


/**
 * Spring Data JPA repository for the Tutor entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TutorRepository extends JpaRepository<Tutor, Long> {
	@Query("select c from Tutor c where upper(c.nome) like  '%'||upper(:nome)||'%' or upper(c.cognome) like '%'||upper(:cognome)||'%'")
	Page<Tutor> findByNomeOrCognome(@Param("nome") String nome,@Param("cognome") String cognome, Pageable pageable);
}
