package com.saf.repository;


import com.saf.domain.Studenti;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;


/**
 * Spring Data JPA repository for the Studenti entity.
 */
@SuppressWarnings("unused")
@Repository
public interface StudentiRepository extends JpaRepository<Studenti, Long> {
	// and studenti.id NOT IN (select piani_di_studio.relPdsStu.id from PianiDiStudio piani_di_studio where piani_di_studio.relPdsCdl.id =:id) order by studenti.cognome
	@Query("select distinct studenti from Studenti studenti where studenti.relStuCdl.id =:id")
	Page<Studenti> findByCdlId(@Param("id") Long id, Pageable pageable);
	
	@Query("select c from Studenti c where upper(c.nome) like  '%'||upper(:nome)||'%' or upper(c.cognome) like '%'||upper(:cognome)||'%'")
	Page<Studenti> findByNomeOrCognome(@Param("nome") String nome,@Param("cognome") String cognome, Pageable pageable);
	
	//
	 @Query("select distinct studenti from Studenti studenti where studenti.relStuCdl.id =:id and studenti.id IN (select piani_di_studio.relPdsStu.id from PianiDiStudio piani_di_studio where piani_di_studio.relPdsCdl.id =:id)")
	 Page<Studenti> findAllStudentsByCdlId(@Param("id") Long id, Pageable pageable);
}
