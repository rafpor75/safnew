/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { StudentiService } from 'app/entities/studenti/studenti.service';
import { IStudenti, Studenti } from 'app/shared/model/studenti.model';

describe('Service Tests', () => {
    describe('Studenti Service', () => {
        let injector: TestBed;
        let service: StudentiService;
        let httpMock: HttpTestingController;
        let elemDefault: IStudenti;
        let currentDate: moment.Moment;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });
            injector = getTestBed();
            service = injector.get(StudentiService);
            httpMock = injector.get(HttpTestingController);
            currentDate = moment();

            elemDefault = new Studenti(
                0,
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                currentDate,
                'AAAAAAA',
                'AAAAAAA',
                false,
                false,
                currentDate
            );
        });

        describe('Service methods', async () => {
            it('should find an element', async () => {
                const returnedFromService = Object.assign(
                    {
                        dataDiNascita: currentDate.format(DATE_FORMAT),
                        dataModifica: currentDate.format(DATE_FORMAT)
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

            it('should create a Studenti', async () => {
                const returnedFromService = Object.assign(
                    {
                        id: 0,
                        dataDiNascita: currentDate.format(DATE_FORMAT),
                        dataModifica: currentDate.format(DATE_FORMAT)
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        dataDiNascita: currentDate,
                        dataModifica: currentDate
                    },
                    returnedFromService
                );
                service
                    .create(new Studenti(null))
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should update a Studenti', async () => {
                const returnedFromService = Object.assign(
                    {
                        nome: 'BBBBBB',
                        cognome: 'BBBBBB',
                        email: 'BBBBBB',
                        telefono: 'BBBBBB',
                        indirizzo: 'BBBBBB',
                        citta: 'BBBBBB',
                        provincia: 'BBBBBB',
                        stato: 'BBBBBB',
                        cap: 'BBBBBB',
                        dataDiNascita: currentDate.format(DATE_FORMAT),
                        luogoDiNascita: 'BBBBBB',
                        matricola: 'BBBBBB',
                        tempoParziale: true,
                        abilitato: true,
                        dataModifica: currentDate.format(DATE_FORMAT)
                    },
                    elemDefault
                );

                const expected = Object.assign(
                    {
                        dataDiNascita: currentDate,
                        dataModifica: currentDate
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

            it('should return a list of Studenti', async () => {
                const returnedFromService = Object.assign(
                    {
                        nome: 'BBBBBB',
                        cognome: 'BBBBBB',
                        email: 'BBBBBB',
                        telefono: 'BBBBBB',
                        indirizzo: 'BBBBBB',
                        citta: 'BBBBBB',
                        provincia: 'BBBBBB',
                        stato: 'BBBBBB',
                        cap: 'BBBBBB',
                        dataDiNascita: currentDate.format(DATE_FORMAT),
                        luogoDiNascita: 'BBBBBB',
                        matricola: 'BBBBBB',
                        tempoParziale: true,
                        abilitato: true,
                        dataModifica: currentDate.format(DATE_FORMAT)
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        dataDiNascita: currentDate,
                        dataModifica: currentDate
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

            it('should delete a Studenti', async () => {
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
