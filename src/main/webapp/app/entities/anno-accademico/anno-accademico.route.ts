import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AnnoAccademico } from 'app/shared/model/anno-accademico.model';
import { AnnoAccademicoService } from './anno-accademico.service';
import { AnnoAccademicoComponent } from './anno-accademico.component';
import { AnnoAccademicoDetailComponent } from './anno-accademico-detail.component';
import { AnnoAccademicoUpdateComponent } from './anno-accademico-update.component';
import { AnnoAccademicoDeletePopupComponent } from './anno-accademico-delete-dialog.component';
import { IAnnoAccademico } from 'app/shared/model/anno-accademico.model';

@Injectable({ providedIn: 'root' })
export class AnnoAccademicoResolve implements Resolve<IAnnoAccademico> {
    constructor(private service: AnnoAccademicoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((annoAccademico: HttpResponse<AnnoAccademico>) => annoAccademico.body));
        }
        return of(new AnnoAccademico());
    }
}

export const annoAccademicoRoute: Routes = [
    {
        path: 'anno-accademico',
        component: AnnoAccademicoComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.annoAccademico.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'anno-accademico/:id/view',
        component: AnnoAccademicoDetailComponent,
        resolve: {
            annoAccademico: AnnoAccademicoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.annoAccademico.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'anno-accademico/new',
        component: AnnoAccademicoUpdateComponent,
        resolve: {
            annoAccademico: AnnoAccademicoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.annoAccademico.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'anno-accademico/:id/edit',
        component: AnnoAccademicoUpdateComponent,
        resolve: {
            annoAccademico: AnnoAccademicoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.annoAccademico.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const annoAccademicoPopupRoute: Routes = [
    {
        path: 'anno-accademico/:id/delete',
        component: AnnoAccademicoDeletePopupComponent,
        resolve: {
            annoAccademico: AnnoAccademicoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.annoAccademico.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
