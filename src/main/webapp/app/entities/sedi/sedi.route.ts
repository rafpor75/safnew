import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sedi } from 'app/shared/model/sedi.model';
import { SediService } from './sedi.service';
import { SediComponent } from './sedi.component';
import { SediDetailComponent } from './sedi-detail.component';
import { SediUpdateComponent } from './sedi-update.component';
import { SediDeletePopupComponent } from './sedi-delete-dialog.component';
import { ISedi } from 'app/shared/model/sedi.model';

@Injectable({ providedIn: 'root' })
export class SediResolve implements Resolve<ISedi> {
    constructor(private service: SediService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((sedi: HttpResponse<Sedi>) => sedi.body));
        }
        return of(new Sedi());
    }
}

export const sediRoute: Routes = [
    {
        path: 'sedi',
        component: SediComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.sedi.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'sedi/:id/view',
        component: SediDetailComponent,
        resolve: {
            sedi: SediResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.sedi.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'sedi/new',
        component: SediUpdateComponent,
        resolve: {
            sedi: SediResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.sedi.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'sedi/:id/edit',
        component: SediUpdateComponent,
        resolve: {
            sedi: SediResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.sedi.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const sediPopupRoute: Routes = [
    {
        path: 'sedi/:id/delete',
        component: SediDeletePopupComponent,
        resolve: {
            sedi: SediResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.sedi.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
