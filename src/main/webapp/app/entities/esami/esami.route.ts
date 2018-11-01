import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Esami } from 'app/shared/model/esami.model';
import { EsamiService } from './esami.service';
import { EsamiComponent } from './esami.component';
import { EsamiDetailComponent } from './esami-detail.component';
import { EsamiUpdateComponent } from './esami-update.component';
import { EsamiDeletePopupComponent } from './esami-delete-dialog.component';
import { IEsami } from 'app/shared/model/esami.model';

@Injectable({ providedIn: 'root' })
export class EsamiResolve implements Resolve<IEsami> {
    constructor(private service: EsamiService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((esami: HttpResponse<Esami>) => esami.body));
        }
        return of(new Esami());
    }
}

export const esamiRoute: Routes = [
    {
        path: 'esami',
        component: EsamiComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'safnewApp.esami.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'esami/:id/view',
        component: EsamiDetailComponent,
        resolve: {
            esami: EsamiResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.esami.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'esami/new',
        component: EsamiUpdateComponent,
        resolve: {
            esami: EsamiResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.esami.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'esami/:id/edit',
        component: EsamiUpdateComponent,
        resolve: {
            esami: EsamiResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.esami.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const esamiPopupRoute: Routes = [
    {
        path: 'esami/:id/delete',
        component: EsamiDeletePopupComponent,
        resolve: {
            esami: EsamiResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.esami.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
