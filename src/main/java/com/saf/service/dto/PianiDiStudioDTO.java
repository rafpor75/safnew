package com.saf.service.dto;


import java.time.LocalDate;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A DTO for the PianiDiStudio entity.
 */
public class PianiDiStudioDTO implements Serializable {

    private Long id;

    private Boolean abilitato;

    private LocalDate dataModifica;

    private Long relAnnoAccademicoId;
    
    private String relAnnoAccademicoDescrizione;
    
    private Long relPdsCdlId;
    
    private String relPdsCdlNome;

    private String relPdsCdlCodice;
    
    private Long relPdsStuId;
    
    private String relPdsStuNome;

    private String relPdsStuCognome;
    
    private String relPdsStuMatricola;
    
    public Long getRelPdsStuId() {
		return relPdsStuId;
	}

	public void setRelPdsStuId(Long relPdsStuId) {
		this.relPdsStuId = relPdsStuId;
	}

	public String getRelPdsStuNome() {
		return relPdsStuNome;
	}

	public void setRelPdsStuNome(String relPdsStuNome) {
		this.relPdsStuNome = relPdsStuNome;
	}

	public String getRelPdsStuCognome() {
		return relPdsStuCognome;
	}

	public void setRelPdsStuCognome(String relPdsStuCognome) {
		this.relPdsStuCognome = relPdsStuCognome;
	}

	public String getRelPdsStuMatricola() {
		return relPdsStuMatricola;
	}

	public void setRelPdsStuMatricola(String relPdsStuMatricola) {
		this.relPdsStuMatricola = relPdsStuMatricola;
	}

	
    
    private Set<MaterieDTO> relPdsMats = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean isAbilitato() {
        return abilitato;
    }

    public void setAbilitato(Boolean abilitato) {
        this.abilitato = abilitato;
    }

    public LocalDate getDataModifica() {
        return dataModifica;
    }

    public void setDataModifica(LocalDate dataModifica) {
        this.dataModifica = dataModifica;
    }

    public Long getRelAnnoAccademicoId() {
        return relAnnoAccademicoId;
    }

    public void setRelAnnoAccademicoId(Long annoAccademicoId) {
        this.relAnnoAccademicoId = annoAccademicoId;
    }

    public Long getRelPdsCdlId() {
        return relPdsCdlId;
    }

    public void setRelPdsCdlId(Long cdlId) {
        this.relPdsCdlId = cdlId;
    }

    public Set<MaterieDTO> getRelPdsMats() {
        return relPdsMats;
    }

    public void setRelPdsMats(Set<MaterieDTO> materies) {
        this.relPdsMats = materies;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        PianiDiStudioDTO pianiDiStudioDTO = (PianiDiStudioDTO) o;
        if(pianiDiStudioDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), pianiDiStudioDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "PianiDiStudioDTO{" +
            "id=" + getId() +
            ", abilitato='" + isAbilitato() + "'" +
            ", dataModifica='" + getDataModifica() + "'" +
            "}";
    }

	public String getRelPdsCdlNome() {
		return relPdsCdlNome;
	}

	public void setRelPdsCdlNome(String relPdsCdlNome) {
		this.relPdsCdlNome = relPdsCdlNome;
	}

	public String getRelAnnoAccademicoDescrizione() {
		return relAnnoAccademicoDescrizione;
	}

	public void setRelAnnoAccademicoDescrizione(String relAnnoAccademicoDescrizione) {
		this.relAnnoAccademicoDescrizione = relAnnoAccademicoDescrizione;
	}

	public String getRelPdsCdlCodice() {
		return relPdsCdlCodice;
	}

	public void setRelPdsCdlCodice(String relPdsCdlCodice) {
		this.relPdsCdlCodice = relPdsCdlCodice;
	}
}
