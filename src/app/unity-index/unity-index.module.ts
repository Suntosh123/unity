import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnityIndexComponent } from './unity-index.component';
import { UnityIndexRoutingModule } from '/Users/santosh/dev/forTest/unity/src/app/unity-index/unity-index.routing.module';
import { UnityLoginComponent } from '/Users/santosh/dev/forTest/unity/src/app/unity-index/unity-login/unity-login.component';
import { UnityForgotComponent } from '/Users/santosh/dev/forTest/unity/src/app/unity-index/unity-forgot/unity-forgot.component';
import { UnitySignUpComponent } from '/Users/santosh/dev/forTest/unity/src/app/unity-index/unity-sign-up/unity-sign-up.component';

@NgModule({
    declarations: [
        UnityIndexComponent,
        UnityLoginComponent,
        UnityForgotComponent,
        UnitySignUpComponent
    ],
    imports: [
      CommonModule,
      UnityIndexRoutingModule
    ],
    providers: []
  })
  
export class UnityIndexModule { }