import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Facolta } from 'app/shared/model/facolta.model';
import { FacoltaService } from './facolta.service';
import { FacoltaComponent } from './facolta.component';
import { FacoltaDetailComponent } from './facolta-detail.component';
import { FacoltaUpdateComponent } from './facolta-update.component';
import { FacoltaDeletePopupComponent } from './facolta-delete-dialog.component';
import { IFacolta } from 'app/shared/model/facolta.model';

@Injectable({ providedIn: 'root' })
export class FacoltaResolve implements Resolve<IFacolta> {
    constructor(private service: FacoltaService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((facolta: HttpResponse<Facolta>) => facolta.body));
        }
        return of(new Facolta());
    }
}

export const facoltaRoute: Routes = [
    {
        path: 'facolta',
        component: FacoltaComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'safnewApp.facolta.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'facolta/:id/view',
        component: FacoltaDetailComponent,
        resolve: {
            facolta: FacoltaResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.facolta.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'facolta/new',
        component: FacoltaUpdateComponent,
        resolve: {
            facolta: FacoltaResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.facolta.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'facolta/:id/edit',
        component: FacoltaUpdateComponent,
        resolve: {
            facolta: FacoltaResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.facolta.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const facoltaPopupRoute: Routes = [
    {
        path: 'facolta/:id/delete',
        component: FacoltaDeletePopupComponent,
        resolve: {
            facolta: FacoltaResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.facolta.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
