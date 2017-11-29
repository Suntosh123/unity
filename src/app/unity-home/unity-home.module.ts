import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnityHomeRoutingModule } from '/Users/santosh/dev/forTest/unity/src/app/unity-home/unity-home-routing.module';

import { UnityHomeComponent } from '/Users/santosh/dev/forTest/unity/src/app/unity-home/unity-home.component';
import { UnityUserProfileComponent } from './unity-user-profile/unity-user-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports:
    [
        UnityHomeRoutingModule,
        CommonModule
    ],
    declarations:
    [
        UnityHomeComponent,
        UnityUserProfileComponent,
        PageNotFoundComponent
    ]
})
export class UnityHomeModule { }