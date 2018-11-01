package com.saf.service.dto;

import java.io.Serializable;
import io.github.jhipster.service.filter.BooleanFilter;
import io.github.jhipster.service.filter.DoubleFilter;
import io.github.jhipster.service.filter.Filter;
import io.github.jhipster.service.filter.FloatFilter;
import io.github.jhipster.service.filter.IntegerFilter;
import io.github.jhipster.service.filter.LongFilter;
import io.github.jhipster.service.filter.StringFilter;


import io.github.jhipster.service.filter.LocalDateFilter;
import io.github.jhipster.service.filter.ZonedDateTimeFilter;


/**
 * Criteria class for the NoteEsame entity. This class is used in NoteEsameResource to
 * receive all the possible filtering options from the Http GET request parameters.
 * For example the following could be a valid requests:
 * <code> /note-esames?id.greaterThan=5&amp;attr1.contains=something&amp;attr2.specified=false</code>
 * As Spring is unable to properly convert the types, unless specific {@link Filter} class are used, we need to use
 * fix type specific filters.
 */
public class NoteEsameCriteria implements Serializable {
    private static final long serialVersionUID = 1L;


    private LongFilter id;

    private StringFilter appunti;

    private LocalDateFilter dataDispensa;

    private LocalDateFilter dataCorsi;

    private LocalDateFilter dataABI;

    private LocalDateFilter dataRiepilogo;

    private ZonedDateTimeFilter oraEsame;

    private IntegerFilter costoEsame;

    private StringFilter fasce;

    private StringFilter piva;

    private BooleanFilter fattura;

    private StringFilter noteFattura;

    private BooleanFilter emailInviata;

    private LongFilter relNoteStudId;

    private LongFilter relNoteEsamiId;

    public NoteEsameCriteria() {
    }

    public LongFilter getId() {
        return id;
    }

    public void setId(LongFilter id) {
        this.id = id;
    }

    public StringFilter getAppunti() {
        return appunti;
    }

    public void setAppunti(StringFilter appunti) {
        this.appunti = appunti;
    }

    public LocalDateFilter getDataDispensa() {
        return dataDispensa;
    }

    public void setDataDispensa(LocalDateFilter dataDispensa) {
        this.dataDispensa = dataDispensa;
    }

    public LocalDateFilter getDataCorsi() {
        return dataCorsi;
    }

    public void setDataCorsi(LocalDateFilter dataCorsi) {
        this.dataCorsi = dataCorsi;
    }

    public LocalDateFilter getDataABI() {
        return dataABI;
    }

    public void setDataABI(LocalDateFilter dataABI) {
        this.dataABI = dataABI;
    }

    public LocalDateFilter getDataRiepilogo() {
        return dataRiepilogo;
    }

    public void setDataRiepilogo(LocalDateFilter dataRiepilogo) {
        this.dataRiepilogo = dataRiepilogo;
    }

    public ZonedDateTimeFilter getOraEsame() {
        return oraEsame;
    }

    public void setOraEsame(ZonedDateTimeFilter oraEsame) {
        this.oraEsame = oraEsame;
    }

    public IntegerFilter getCostoEsame() {
        return costoEsame;
    }

    public void setCostoEsame(IntegerFilter costoEsame) {
        this.costoEsame = costoEsame;
    }

    public StringFilter getFasce() {
        return fasce;
    }

    public void setFasce(StringFilter fasce) {
        this.fasce = fasce;
    }

    public StringFilter getPiva() {
        return piva;
    }

    public void setPiva(StringFilter piva) {
        this.piva = piva;
    }

    public BooleanFilter getFattura() {
        return fattura;
    }

    public void setFattura(BooleanFilter fattura) {
        this.fattura = fattura;
    }

    public StringFilter getNoteFattura() {
        return noteFattura;
    }

    public void setNoteFattura(StringFilter noteFattura) {
        this.noteFattura = noteFattura;
    }

    public BooleanFilter getEmailInviata() {
        return emailInviata;
    }

    public void setEmailInviata(BooleanFilter emailInviata) {
        this.emailInviata = emailInviata;
    }

    public LongFilter getRelNoteStudId() {
        return relNoteStudId;
    }

    public void setRelNoteStudId(LongFilter relNoteStudId) {
        this.relNoteStudId = relNoteStudId;
    }

    public LongFilter getRelNoteEsamiId() {
        return relNoteEsamiId;
    }

    public void setRelNoteEsamiId(LongFilter relNoteEsamiId) {
        this.relNoteEsamiId = relNoteEsamiId;
    }

    @Override
    public String toString() {
        return "NoteEsameCriteria{" +
                (id != null ? "id=" + id + ", " : "") +
                (appunti != null ? "appunti=" + appunti + ", " : "") +
                (dataDispensa != null ? "dataDispensa=" + dataDispensa + ", " : "") +
                (dataCorsi != null ? "dataCorsi=" + dataCorsi + ", " : "") +
                (dataABI != null ? "dataABI=" + dataABI + ", " : "") +
                (dataRiepilogo != null ? "dataRiepilogo=" + dataRiepilogo + ", " : "") +
                (oraEsame != null ? "oraEsame=" + oraEsame + ", " : "") +
                (costoEsame != null ? "costoEsame=" + costoEsame + ", " : "") +
                (fasce != null ? "fasce=" + fasce + ", " : "") +
                (piva != null ? "piva=" + piva + ", " : "") +
                (fattura != null ? "fattura=" + fattura + ", " : "") +
                (noteFattura != null ? "noteFattura=" + noteFattura + ", " : "") +
                (emailInviata != null ? "emailInviata=" + emailInviata + ", " : "") +
                (relNoteStudId != null ? "relNoteStudId=" + relNoteStudId + ", " : "") +
                (relNoteEsamiId != null ? "relNoteEsamiId=" + relNoteEsamiId + ", " : "") +
            "}";
    }

}
