import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Materie } from 'app/shared/model/materie.model';
import { MaterieService } from './materie.service';
import { MaterieComponent } from './materie.component';
import { MaterieDetailComponent } from './materie-detail.component';
import { MaterieUpdateComponent } from './materie-update.component';
import { MaterieDeletePopupComponent } from './materie-delete-dialog.component';
import { IMaterie } from 'app/shared/model/materie.model';

@Injectable({ providedIn: 'root' })
export class MaterieResolve implements Resolve<IMaterie> {
    constructor(private service: MaterieService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((materie: HttpResponse<Materie>) => materie.body));
        }
        return of(new Materie());
    }
}

export const materieRoute: Routes = [
    {
        path: 'materie',
        component: MaterieComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'safnewApp.materie.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'materie/:id/view',
        component: MaterieDetailComponent,
        resolve: {
            materie: MaterieResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.materie.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'materie/new',
        component: MaterieUpdateComponent,
        resolve: {
            materie: MaterieResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.materie.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'materie/:id/edit',
        component: MaterieUpdateComponent,
        resolve: {
            materie: MaterieResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.materie.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const materiePopupRoute: Routes = [
    {
        path: 'materie/:id/delete',
        component: MaterieDeletePopupComponent,
        resolve: {
            materie: MaterieResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.materie.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
