/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_FORMAT, DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { NoteEsameService } from 'app/entities/note-esame/note-esame.service';
import { INoteEsame, NoteEsame } from 'app/shared/model/note-esame.model';

describe('Service Tests', () => {
    describe('NoteEsame Service', () => {
        let injector: TestBed;
        let service: NoteEsameService;
        let httpMock: HttpTestingController;
        let elemDefault: INoteEsame;
        let currentDate: moment.Moment;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });
            injector = getTestBed();
            service = injector.get(NoteEsameService);
            httpMock = injector.get(HttpTestingController);
            currentDate = moment();

            elemDefault = new NoteEsame(
                0,
                'AAAAAAA',
                currentDate,
                currentDate,
                currentDate,
                currentDate,
                currentDate,
                0,
                'AAAAAAA',
                'AAAAAAA',
                false,
                'AAAAAAA',
                false
            );
        });

        describe('Service methods', async () => {
            it('should find an element', async () => {
                const returnedFromService = Object.assign(
                    {
                        dataDispensa: currentDate.format(DATE_FORMAT),
                        dataCorsi: currentDate.format(DATE_FORMAT),
                        dataABI: currentDate.format(DATE_FORMAT),
                        dataRiepilogo: currentDate.format(DATE_FORMAT),
                        oraEsame: currentDate.format(DATE_TIME_FORMAT)
                    },
                    elemDefault
                );
                service
                    .find(123)
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: elemDefault }));

                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should create a NoteEsame', async () => {
                const returnedFromService = Object.assign(
                    {
                        id: 0,
                        dataDispensa: currentDate.format(DATE_FORMAT),
                        dataCorsi: currentDate.format(DATE_FORMAT),
                        dataABI: currentDate.format(DATE_FORMAT),
                        dataRiepilogo: currentDate.format(DATE_FORMAT),
                        oraEsame: currentDate.format(DATE_TIME_FORMAT)
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        dataDispensa: currentDate,
                        dataCorsi: currentDate,
                        dataABI: currentDate,
                        dataRiepilogo: currentDate,
                        oraEsame: currentDate
                    },
                    returnedFromService
                );
                service
                    .create(new NoteEsame(null))
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should update a NoteEsame', async () => {
                const returnedFromService = Object.assign(
                    {
                        appunti: 'BBBBBB',
                        dataDispensa: currentDate.format(DATE_FORMAT),
                        dataCorsi: currentDate.format(DATE_FORMAT),
                        dataABI: currentDate.format(DATE_FORMAT),
                        dataRiepilogo: currentDate.format(DATE_FORMAT),
                        oraEsame: currentDate.format(DATE_TIME_FORMAT),
                        costoEsame: 1,
                        fasce: 'BBBBBB',
                        piva: 'BBBBBB',
                        fattura: true,
                        noteFattura: 'BBBBBB',
                        emailInviata: true
                    },
                    elemDefault
                );

                const expected = Object.assign(
                    {
                        dataDispensa: currentDate,
                        dataCorsi: currentDate,
                        dataABI: currentDate,
                        dataRiepilogo: currentDate,
                        oraEsame: currentDate
                    },
                    returnedFromService
                );
                service
                    .update(expected)
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'PUT' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should return a list of NoteEsame', async () => {
                const returnedFromService = Object.assign(
                    {
                        appunti: 'BBBBBB',
                        dataDispensa: currentDate.format(DATE_FORMAT),
                        dataCorsi: currentDate.format(DATE_FORMAT),
                        dataABI: currentDate.format(DATE_FORMAT),
                        dataRiepilogo: currentDate.format(DATE_FORMAT),
                        oraEsame: currentDate.format(DATE_TIME_FORMAT),
                        costoEsame: 1,
                        fasce: 'BBBBBB',
                        piva: 'BBBBBB',
                        fattura: true,
                        noteFattura: 'BBBBBB',
                        emailInviata: true
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        dataDispensa: currentDate,
                        dataCorsi: currentDate,
                        dataABI: currentDate,
                        dataRiepilogo: currentDate,
                        oraEsame: currentDate
                    },
                    returnedFromService
                );
                service
                    .query(expected)
                    .pipe(
                        take(1),
                        map(resp => resp.body)
                    )
                    .subscribe(body => expect(body).toContainEqual(expected));
                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(JSON.stringify([returnedFromService]));
                httpMock.verify();
            });

            it('should delete a NoteEsame', async () => {
                const rxPromise = service.delete(123).subscribe(resp => expect(resp.ok));

                const req = httpMock.expectOne({ method: 'DELETE' });
                req.flush({ status: 200 });
            });
        });

        afterEach(() => {
            httpMock.verify();
        });
    });
});
