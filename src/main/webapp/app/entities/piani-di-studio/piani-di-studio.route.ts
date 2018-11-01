import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PianiDiStudio } from 'app/shared/model/piani-di-studio.model';
import { PianiDiStudioService } from './piani-di-studio.service';
import { PianiDiStudioComponent } from './piani-di-studio.component';
import { PianiDiStudioDetailComponent } from './piani-di-studio-detail.component';
import { PianiDiStudioUpdateComponent } from './piani-di-studio-update.component';
import { PianiDiStudioDeletePopupComponent } from './piani-di-studio-delete-dialog.component';
import { IPianiDiStudio } from 'app/shared/model/piani-di-studio.model';

@Injectable({ providedIn: 'root' })
export class PianiDiStudioResolve implements Resolve<IPianiDiStudio> {
    constructor(private service: PianiDiStudioService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((pianiDiStudio: HttpResponse<PianiDiStudio>) => pianiDiStudio.body));
        }
        return of(new PianiDiStudio());
    }
}

export const pianiDiStudioRoute: Routes = [
    {
        path: 'piani-di-studio',
        component: PianiDiStudioComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'safnewApp.pianiDiStudio.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'piani-di-studio/:id/view',
        component: PianiDiStudioDetailComponent,
        resolve: {
            pianiDiStudio: PianiDiStudioResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.pianiDiStudio.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'piani-di-studio/new',
        component: PianiDiStudioUpdateComponent,
        resolve: {
            pianiDiStudio: PianiDiStudioResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.pianiDiStudio.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'piani-di-studio/:id/edit',
        component: PianiDiStudioUpdateComponent,
        resolve: {
            pianiDiStudio: PianiDiStudioResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.pianiDiStudio.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const pianiDiStudioPopupRoute: Routes = [
    {
        path: 'piani-di-studio/:id/delete',
        component: PianiDiStudioDeletePopupComponent,
        resolve: {
            pianiDiStudio: PianiDiStudioResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.pianiDiStudio.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
