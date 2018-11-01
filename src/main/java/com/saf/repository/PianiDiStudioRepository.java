package com.saf.repository;

import com.saf.domain.PianiDiStudio;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the PianiDiStudio entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PianiDiStudioRepository extends JpaRepository<PianiDiStudio, Long> {

    @Query(value = "select distinct piani_di_studio from PianiDiStudio piani_di_studio left join fetch piani_di_studio.relPdsMats",
        countQuery = "select count(distinct piani_di_studio) from PianiDiStudio piani_di_studio")
    Page<PianiDiStudio> findAllWithEagerRelationships(Pageable pageable);

    @Query(value = "select distinct piani_di_studio from PianiDiStudio piani_di_studio left join fetch piani_di_studio.relPdsMats")
    List<PianiDiStudio> findAllWithEagerRelationships();

    @Query("select piani_di_studio from PianiDiStudio piani_di_studio left join fetch piani_di_studio.relPdsMats where piani_di_studio.id =:id")
    Optional<PianiDiStudio> findOneWithEagerRelationships(@Param("id") Long id);

}
