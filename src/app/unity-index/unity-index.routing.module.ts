import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnityIndexComponent } from './unity-index.component';
import { UnityLoginComponent } from './unity-login/unity-login.component';
import { UnitySignUpComponent } from './unity-sign-up/unity-sign-up.component';
import { UnityForgotComponent } from './unity-forgot/unity-forgot.component';


const unityIndexRoutes: Routes = [
    {

        path: '',
        component: UnityIndexComponent,
        children: [
            {
                path: '',
                redirectTo: '/app/unity-index/unity-login/login',
                pathMatch: 'full',
            },
            {
                path: 'app/unity-index/unity-login/login',
                component: UnityLoginComponent,
            },
            {
                path: 'app/unity-index/unity-signUp/signUp',
                component: UnitySignUpComponent,
            },
            {
                path: 'app/unity-index/unity-forgot/forgot',
                component: UnityForgotComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(unityIndexRoutes)],
    exports: [RouterModule]
})

export class UnityIndexRoutingModule { }
