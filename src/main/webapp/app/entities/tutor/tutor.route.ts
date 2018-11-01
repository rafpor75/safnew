import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tutor } from 'app/shared/model/tutor.model';
import { TutorService } from './tutor.service';
import { TutorComponent } from './tutor.component';
import { TutorDetailComponent } from './tutor-detail.component';
import { TutorUpdateComponent } from './tutor-update.component';
import { TutorDeletePopupComponent } from './tutor-delete-dialog.component';
import { ITutor } from 'app/shared/model/tutor.model';

@Injectable({ providedIn: 'root' })
export class TutorResolve implements Resolve<ITutor> {
    constructor(private service: TutorService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((tutor: HttpResponse<Tutor>) => tutor.body));
        }
        return of(new Tutor());
    }
}

export const tutorRoute: Routes = [
    {
        path: 'tutor',
        component: TutorComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'safnewApp.tutor.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'tutor/:id/view',
        component: TutorDetailComponent,
        resolve: {
            tutor: TutorResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.tutor.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'tutor/new',
        component: TutorUpdateComponent,
        resolve: {
            tutor: TutorResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.tutor.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'tutor/:id/edit',
        component: TutorUpdateComponent,
        resolve: {
            tutor: TutorResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.tutor.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const tutorPopupRoute: Routes = [
    {
        path: 'tutor/:id/delete',
        component: TutorDeletePopupComponent,
        resolve: {
            tutor: TutorResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.tutor.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
