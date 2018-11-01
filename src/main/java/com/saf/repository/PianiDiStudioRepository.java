package com.saf.repository;

import com.saf.domain.PianiDiStudio;
import com.saf.domain.Studenti;

import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import java.util.List;
import java.util.Optional;
/**
 * Spring Data JPA repository for the PianiDiStudio entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PianiDiStudioRepository extends JpaRepository<PianiDiStudio, Long> {
    @Query("select distinct piani_di_studio from PianiDiStudio piani_di_studio left join fetch piani_di_studio.relPdsMats")
    List<PianiDiStudio> findAllWithEagerRelationships();

    @Query("select piani_di_studio from PianiDiStudio piani_di_studio left join fetch piani_di_studio.relPdsMats where piani_di_studio.id =:id")
    Optional<PianiDiStudio> findOneWithEagerRelationships(@Param("id") Long id);
    //select piani_di_studio from PianiDiStudio piani_di_studio where piani_di_studio.relPdsCdl.id =:id
    //
    @Query("select piani_di_studio from PianiDiStudio piani_di_studio where piani_di_studio.relPdsCdl.id =:id and piani_di_studio.relPdsStu is null")
    Page<PianiDiStudio> findAllWithEagerRelationshipsByCdlId(@Param("id") Long id, Pageable pageable);
    
    
    @Query("select piani_di_studio from PianiDiStudio piani_di_studio where piani_di_studio.relPdsStu.id =:id")
    Page<PianiDiStudio> findAllWithEagerRelationshipsByStuId(@Param("id") Long id, Pageable pageable);
    
}
