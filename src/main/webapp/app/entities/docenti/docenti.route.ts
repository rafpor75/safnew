import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Docenti } from 'app/shared/model/docenti.model';
import { DocentiService } from './docenti.service';
import { DocentiComponent } from './docenti.component';
import { DocentiDetailComponent } from './docenti-detail.component';
import { DocentiUpdateComponent } from './docenti-update.component';
import { DocentiDeletePopupComponent } from './docenti-delete-dialog.component';
import { IDocenti } from 'app/shared/model/docenti.model';

@Injectable({ providedIn: 'root' })
export class DocentiResolve implements Resolve<IDocenti> {
    constructor(private service: DocentiService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((docenti: HttpResponse<Docenti>) => docenti.body));
        }
        return of(new Docenti());
    }
}

export const docentiRoute: Routes = [
    {
        path: 'docenti',
        component: DocentiComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'safnewApp.docenti.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'docenti/:id/view',
        component: DocentiDetailComponent,
        resolve: {
            docenti: DocentiResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.docenti.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'docenti/new',
        component: DocentiUpdateComponent,
        resolve: {
            docenti: DocentiResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.docenti.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'docenti/:id/edit',
        component: DocentiUpdateComponent,
        resolve: {
            docenti: DocentiResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.docenti.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const docentiPopupRoute: Routes = [
    {
        path: 'docenti/:id/delete',
        component: DocentiDeletePopupComponent,
        resolve: {
            docenti: DocentiResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.docenti.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
