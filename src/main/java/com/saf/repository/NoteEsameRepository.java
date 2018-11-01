package com.saf.repository;


import com.saf.domain.Esami;
import com.saf.domain.NoteEsame;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;


/**
 * Spring Data JPA repository for the NoteEsame entity.
 */
@SuppressWarnings("unused")
@Repository
public interface NoteEsameRepository extends JpaRepository<NoteEsame, Long>, JpaSpecificationExecutor<NoteEsame> {
	//@Query("select distinct noteEsame from NoteEsame noteEsame join Esami i on noteEsame.relNoteEsami.id = i.id where noteEsame.relNoteEsami.id =:id")
	Page<NoteEsame> findByRelNoteEsami_Id(@Param("id") Long id, Pageable pageable);
	
	
	Long countByRelNoteEsami_Id(@Param("id") Long id);
	//presi da search 
//	@"SELECT esami FROM Esami esami WHERE esami.relEsamiSedi.id = :id and esami.data >= :fromdata and sami.data <= :todata")
//	Page<Esami> findByEsameRelNoteEsameSedi_Id(Long sede,  Pageable pageable);
//	
//	Page<Esami> findByEsameRelNoteEsameSedi_IdAndDataBetween(Long query,LocalDate fromdata, LocalDate todata,  Pageable pageable);
}
