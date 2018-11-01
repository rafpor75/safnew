import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Studenti } from 'app/shared/model/studenti.model';
import { StudentiService } from './studenti.service';
import { StudentiComponent } from './studenti.component';
import { StudentiDetailComponent } from './studenti-detail.component';
import { StudentiUpdateComponent } from './studenti-update.component';
import { StudentiDeletePopupComponent } from './studenti-delete-dialog.component';
import { IStudenti } from 'app/shared/model/studenti.model';

@Injectable({ providedIn: 'root' })
export class StudentiResolve implements Resolve<IStudenti> {
    constructor(private service: StudentiService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((studenti: HttpResponse<Studenti>) => studenti.body));
        }
        return of(new Studenti());
    }
}

export const studentiRoute: Routes = [
    {
        path: 'studenti',
        component: StudentiComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'safnewApp.studenti.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'studenti/:id/view',
        component: StudentiDetailComponent,
        resolve: {
            studenti: StudentiResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.studenti.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'studenti/new',
        component: StudentiUpdateComponent,
        resolve: {
            studenti: StudentiResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.studenti.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'studenti/:id/edit',
        component: StudentiUpdateComponent,
        resolve: {
            studenti: StudentiResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.studenti.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const studentiPopupRoute: Routes = [
    {
        path: 'studenti/:id/delete',
        component: StudentiDeletePopupComponent,
        resolve: {
            studenti: StudentiResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.studenti.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
