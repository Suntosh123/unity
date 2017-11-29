import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnityHomeComponent } from './unity-home.component';
import { UnityUserProfileComponent } from './unity-user-profile/unity-user-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const unityHomeRoutes: Routes = [
    {
        path: '',
        component: UnityHomeComponent,
        children: [
        {
            path: '',
            redirectTo: 'unity-user-profile',
            pathMatch: 'full',
        },
        {
            path: 'unity-user-profile',
            component: UnityUserProfileComponent,
        },
        {
            path: '**',
            component: PageNotFoundComponent
        }
    ]
    }
];
@NgModule({
    imports: [ RouterModule.forChild(unityHomeRoutes) ],
    exports: [ RouterModule ],
})

export class UnityHomeRoutingModule { }