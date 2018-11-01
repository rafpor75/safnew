import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { NoteEsame } from 'app/shared/model/note-esame.model';
import { NoteEsameService } from './note-esame.service';
import { NoteEsameComponent } from './note-esame.component';
import { NoteEsameDetailComponent } from './note-esame-detail.component';
import { NoteEsameUpdateComponent } from './note-esame-update.component';
import { NoteEsameDeletePopupComponent } from './note-esame-delete-dialog.component';
import { INoteEsame } from 'app/shared/model/note-esame.model';

@Injectable({ providedIn: 'root' })
export class NoteEsameResolve implements Resolve<INoteEsame> {
    constructor(private service: NoteEsameService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((noteEsame: HttpResponse<NoteEsame>) => noteEsame.body));
        }
        return of(new NoteEsame());
    }
}

export const noteEsameRoute: Routes = [
    {
        path: 'note-esame',
        component: NoteEsameComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'safnewApp.noteEsame.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'note-esame/:id/view',
        component: NoteEsameDetailComponent,
        resolve: {
            noteEsame: NoteEsameResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.noteEsame.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'note-esame/new',
        component: NoteEsameUpdateComponent,
        resolve: {
            noteEsame: NoteEsameResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.noteEsame.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'note-esame/:id/edit',
        component: NoteEsameUpdateComponent,
        resolve: {
            noteEsame: NoteEsameResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.noteEsame.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const noteEsamePopupRoute: Routes = [
    {
        path: 'note-esame/:id/delete',
        component: NoteEsameDeletePopupComponent,
        resolve: {
            noteEsame: NoteEsameResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safnewApp.noteEsame.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
