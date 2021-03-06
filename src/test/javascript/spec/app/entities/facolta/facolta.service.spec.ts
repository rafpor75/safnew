/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { FacoltaService } from 'app/entities/facolta/facolta.service';
import { IFacolta, Facolta } from 'app/shared/model/facolta.model';

describe('Service Tests', () => {
    describe('Facolta Service', () => {
        let injector: TestBed;
        let service: FacoltaService;
        let httpMock: HttpTestingController;
        let elemDefault: IFacolta;
        let currentDate: moment.Moment;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });
            injector = getTestBed();
            service = injector.get(FacoltaService);
            httpMock = injector.get(HttpTestingController);
            currentDate = moment();

            elemDefault = new Facolta(0, 'AAAAAAA', currentDate, false);
        });

        describe('Service methods', async () => {
            it('should find an element', async () => {
                const returnedFromService = Object.assign(
                    {
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

            it('should create a Facolta', async () => {
                const returnedFromService = Object.assign(
                    {
                        id: 0,
                        dataModifica: currentDate.format(DATE_FORMAT)
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        dataModifica: currentDate
                    },
                    returnedFromService
                );
                service
                    .create(new Facolta(null))
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should update a Facolta', async () => {
                const returnedFromService = Object.assign(
                    {
                        nome: 'BBBBBB',
                        dataModifica: currentDate.format(DATE_FORMAT),
                        abilitato: true
                    },
                    elemDefault
                );

                const expected = Object.assign(
                    {
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

            it('should return a list of Facolta', async () => {
                const returnedFromService = Object.assign(
                    {
                        nome: 'BBBBBB',
                        dataModifica: currentDate.format(DATE_FORMAT),
                        abilitato: true
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
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

            it('should delete a Facolta', async () => {
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
