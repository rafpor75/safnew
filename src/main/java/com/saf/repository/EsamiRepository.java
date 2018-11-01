package com.saf.repository;

import com.saf.domain.Esami;
import com.saf.domain.NoteEsame;

import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Date;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
//import org.springframework.data.elasticsearch.annotations.Query;
import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Esami entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EsamiRepository extends JpaRepository<Esami, Long> {
////	 	@Query("SELECT esami FROM Esami esami WHERE esami.relEsamiSedi.id = :id and esami.data >= :fromdata and sami.data <= :todata")
//		Page<Esami> findByRelEsamiSedi_Id(Long data,LocalDate fromdata, LocalDate todata, Pageable pageable);
		
		//@Query("SELECT esami FROM Esami esami WHERE esami.relMatEsami.id = :id")
		Page<Esami> findByRelMatEsami_Id(Long id, Pageable pageable);
		
		
		
		//@Query("{\"bool\" : {\"must\" : {\"range\" : {\"data\" : {\"from\" : \"?0\",\"to\" : \"?1\",\"include_lower\" : true,\"include_upper\" : true}}}}}")
		Page<Esami> findByDataBetween(LocalDate fromdata, LocalDate todata,  Pageable pageable);
		//findByRelEsamiByData(String fromdata,String todata,  Pageable pageable);
		
		
}
