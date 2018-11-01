package com.saf.service.dto;


import java.time.LocalDate;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A DTO for the Studenti entity.
 */
public class StudentiDTO implements Serializable {

    private Long id;

    @NotNull
    @Size(min = 1, max = 65)
    private String nome;

    @NotNull
    @Size(min = 1, max = 65)
    private String cognome;

    @NotNull
    @Size(min = 1, max = 65)
    private String email;

    private String telefono;

    private String indirizzo;

    @Size(min = 1, max = 65)
    private String citta;

    @Size(min = 2, max = 3)
    private String provincia;

    private String stato;

    private String cap;

    private LocalDate dataDiNascita;

    private String luogoDiNascita;

    @NotNull
    private String matricola;

    private Boolean tempoParziale;

    private Boolean abilitato;

    private LocalDate dataModifica;

    private String annoAccademico;

    private Long relStuCdlId;
    
    private String relStuCdlNome;
    
    private String relStuCdlCodice;

    public String getRelStuCdlNome() {
		return relStuCdlNome;
	}

	public void setRelStuCdlNome(String relStuCdlNome) {
		this.relStuCdlNome = relStuCdlNome;
	}

	public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCognome() {
        return cognome;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getIndirizzo() {
        return indirizzo;
    }

    public void setIndirizzo(String indirizzo) {
        this.indirizzo = indirizzo;
    }

    public String getCitta() {
        return citta;
    }

    public void setCitta(String citta) {
        this.citta = citta;
    }

    public String getProvincia() {
        return provincia;
    }

    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }

    public String getStato() {
        return stato;
    }

    public void setStato(String stato) {
        this.stato = stato;
    }

    public String getCap() {
        return cap;
    }

    public void setCap(String cap) {
        this.cap = cap;
    }

    public LocalDate getDataDiNascita() {
        return dataDiNascita;
    }

    public void setDataDiNascita(LocalDate dataDiNascita) {
        this.dataDiNascita = dataDiNascita;
    }

    public String getLuogoDiNascita() {
        return luogoDiNascita;
    }

    public void setLuogoDiNascita(String luogoDiNascita) {
        this.luogoDiNascita = luogoDiNascita;
    }

    public String getMatricola() {
        return matricola;
    }

    public void setMatricola(String matricola) {
        this.matricola = matricola;
    }

    public Boolean isTempoParziale() {
        return tempoParziale;
    }

    public void setTempoParziale(Boolean tempoParziale) {
        this.tempoParziale = tempoParziale;
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

    public String getAnnoAccademico() {
        return annoAccademico;
    }

    public void setAnnoAccademico(String annoAccademico) {
        this.annoAccademico = annoAccademico;
    }

    public Long getRelStuCdlId() {
        return relStuCdlId;
    }

    public void setRelStuCdlId(Long cdlId) {
        this.relStuCdlId = cdlId;
    }

    public String getRelStuCdlCodice() {
		return relStuCdlCodice;
	}

	public void setRelStuCdlCodice(String relStuCdlCodice) {
		this.relStuCdlCodice = relStuCdlCodice;
	}

	@Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        StudentiDTO studentiDTO = (StudentiDTO) o;
        if(studentiDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), studentiDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "StudentiDTO{" +
            "id=" + getId() +
            ", nome='" + getNome() + "'" +
            ", cognome='" + getCognome() + "'" +
            ", email='" + getEmail() + "'" +
            ", telefono='" + getTelefono() + "'" +
            ", indirizzo='" + getIndirizzo() + "'" +
            ", citta='" + getCitta() + "'" +
            ", provincia='" + getProvincia() + "'" +
            ", stato='" + getStato() + "'" +
            ", cap='" + getCap() + "'" +
            ", dataDiNascita='" + getDataDiNascita() + "'" +
            ", luogoDiNascita='" + getLuogoDiNascita() + "'" +
            ", matricola='" + getMatricola() + "'" +
            ", tempoParziale='" + isTempoParziale() + "'" +
            ", abilitato='" + isAbilitato() + "'" +
            ", dataModifica='" + getDataModifica() + "'" +
            ", annoAccademico='" + getAnnoAccademico() + "'" +
            "}";
    }
}
