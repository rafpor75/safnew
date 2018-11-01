package com.saf.service.dto;


import java.time.LocalDate;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A DTO for the Esami entity.
 */
public class EsamiDTO implements Serializable {

    private Long id;

    private LocalDate data;

    private Long relMatEsamiId;
    
    private String relMatEsamiNome;
    
    private String relEsamiCdlNome;

  

	public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public Long getRelMatEsamiId() {
        return relMatEsamiId;
    }

    public void setRelMatEsamiId(Long materieId) {
        this.relMatEsamiId = materieId;
    }

    public String getRelMatEsamiNome() {
		return relMatEsamiNome;
	}

	public void setRelMatEsamiNome(String relMatEsamiNome) {
		this.relMatEsamiNome = relMatEsamiNome;
	}

	  public String getRelEsamiCdlNome() {
			return relEsamiCdlNome;
		}

		public void setRelEsamiCdlNome(String relEsamiCdlNome) {
			this.relEsamiCdlNome = relEsamiCdlNome;
		}
	
	@Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        EsamiDTO esamiDTO = (EsamiDTO) o;
        if(esamiDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), esamiDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "EsamiDTO{" +
            "id=" + getId() +
            ", data='" + getData() + "'" +
            "}";
    }
}
