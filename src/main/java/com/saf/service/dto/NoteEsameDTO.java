package com.saf.service.dto;


import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A DTO for the NoteEsame entity.
 */
public class NoteEsameDTO implements Serializable {

    private Long id;

    private String appunti;

    private LocalDate dataDispensa;

    private LocalDate dataCorsi;

    private LocalDate dataABI;

    private LocalDate dataRiepilogo;

    private ZonedDateTime oraEsame;

    private Integer costoEsame;

    private String fasce;

    private String piva;

    private Boolean fattura;

    private String noteFattura;

    private Boolean emailInviata;

    private Long relNoteSediId;

    private String relNoteSediSede;

    private Long relNoteStudId;
    
    private String relNoteStudNome;
    
    private String relNoteStudCognome;
    
    private String relNoteStudMatricola;

    private Long relNoteEsamiId;

    private Boolean superato;
    
    private Boolean sostenuto;
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAppunti() {
        return appunti;
    }

    public void setAppunti(String appunti) {
        this.appunti = appunti;
    }

    public LocalDate getDataDispensa() {
        return dataDispensa;
    }

    public void setDataDispensa(LocalDate dataDispensa) {
        this.dataDispensa = dataDispensa;
    }

    public LocalDate getDataCorsi() {
        return dataCorsi;
    }

    public void setDataCorsi(LocalDate dataCorsi) {
        this.dataCorsi = dataCorsi;
    }

    public LocalDate getDataABI() {
        return dataABI;
    }

    public void setDataABI(LocalDate dataABI) {
        this.dataABI = dataABI;
    }

    public LocalDate getDataRiepilogo() {
        return dataRiepilogo;
    }

    public void setDataRiepilogo(LocalDate dataRiepilogo) {
        this.dataRiepilogo = dataRiepilogo;
    }

    public ZonedDateTime getOraEsame() {
        return oraEsame;
    }

    public void setOraEsame(ZonedDateTime oraEsame) {
        this.oraEsame = oraEsame;
    }

    public Integer getCostoEsame() {
        return costoEsame;
    }

    public void setCostoEsame(Integer costoEsame) {
        this.costoEsame = costoEsame;
    }

    public String getFasce() {
        return fasce;
    }

    public void setFasce(String fasce) {
        this.fasce = fasce;
    }

    public String getPiva() {
        return piva;
    }

    public void setPiva(String piva) {
        this.piva = piva;
    }

    public Boolean isFattura() {
        return fattura;
    }

    public void setFattura(Boolean fattura) {
        this.fattura = fattura;
    }

    public String getNoteFattura() {
        return noteFattura;
    }

    public void setNoteFattura(String noteFattura) {
        this.noteFattura = noteFattura;
    }

    public Boolean isEmailInviata() {
        return emailInviata;
    }

    public void setEmailInviata(Boolean emailInviata) {
        this.emailInviata = emailInviata;
    }

    public Long getRelNoteSediId() {
        return relNoteSediId;
    }

    public void setRelNoteSediId(Long sediId) {
        this.relNoteSediId = sediId;
    }

    public String getRelNoteSediSede() {
        return relNoteSediSede;
    }

    public void setRelNoteSediSede(String sediSede) {
        this.relNoteSediSede = sediSede;
    }

    public Long getRelNoteStudId() {
        return relNoteStudId;
    }

    public void setRelNoteStudId(Long studentiId) {
        this.relNoteStudId = studentiId;
    }

    public Long getRelNoteEsamiId() {
        return relNoteEsamiId;
    }

    public void setRelNoteEsamiId(Long esamiId) {
        this.relNoteEsamiId = esamiId;
    }

    public String getRelNoteStudNome() {
		return relNoteStudNome;
	}

	public void setRelNoteStudNome(String relNoteStudNome) {
		this.relNoteStudNome = relNoteStudNome;
	}

	public String getRelNoteStudCognome() {
		return relNoteStudCognome;
	}

	public void setRelNoteStudCognome(String relNoteStudCognome) {
		this.relNoteStudCognome = relNoteStudCognome;
	}

	public String getRelNoteStudMatricola() {
		return relNoteStudMatricola;
	}

	public void setRelNoteStudMatricola(String relNoteStudMatricola) {
		this.relNoteStudMatricola = relNoteStudMatricola;
	}

	public Boolean isSuperato() {
		return superato;
	}

	public void setSuperato(Boolean superato) {
		this.superato = superato;
	}

	public Boolean isSostenuto() {
		return sostenuto;
	}

	public void setSostenuto(Boolean sostenuto) {
		this.sostenuto = sostenuto;
	}

	@Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        NoteEsameDTO noteEsameDTO = (NoteEsameDTO) o;
        if(noteEsameDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), noteEsameDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "NoteEsameDTO{" +
            "id=" + getId() +
            ", appunti='" + getAppunti() + "'" +
            ", dataDispensa='" + getDataDispensa() + "'" +
            ", dataCorsi='" + getDataCorsi() + "'" +
            ", dataABI='" + getDataABI() + "'" +
            ", dataRiepilogo='" + getDataRiepilogo() + "'" +
            ", oraEsame='" + getOraEsame() + "'" +
            ", costoEsame=" + getCostoEsame() +
            ", fasce='" + getFasce() + "'" +
            ", piva='" + getPiva() + "'" +
            ", fattura='" + isFattura() + "'" +
            ", noteFattura='" + getNoteFattura() + "'" +
            ", emailInviata='" + isEmailInviata() + "'" +
            "}";
    }
}
