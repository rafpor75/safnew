import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cdl } from 'app/shared/model/cdl.model';
import { CdlService } from './cdl.service';
import { CdlComponent } from './cdl.component';
import { CdlDetailComponent } from './cdl-detail.component';
import { CdlUpdateComponent } from './cdl-update.component';
import { CdlDeletePopupComponent } from './cdl-delete-dialog.component';
import { ICdl } from 'app/shared/model/cdl.model';

@Injectable({ providedIn: 'root' })
export class CdlResolve implements Resolve<ICdl> {
    constructor(private service: CdlService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((cdl: HttpResponse<Cdl>) => cdl.body));
        }
        return of(new Cdl());
    }
}

export const cdlRoute: Routes = [
    {
        path: 'cdl',
        component: CdlComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'safnewApp.cdl.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'cdl/:id/view',
        component: CdlDetailComponent,
        resolve: {
            cdl: CdlResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.cdl.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'cdl/new',
        component: CdlUpdateComponent,
        resolve: {
            cdl: CdlResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.cdl.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'cdl/:id/edit',
        component: CdlUpdateComponent,
        resolve: {
            cdl: CdlResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.cdl.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const cdlPopupRoute: Routes = [
    {
        path: 'cdl/:id/delete',
        component: CdlDeletePopupComponent,
        resolve: {
            cdl: CdlResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.cdl.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
