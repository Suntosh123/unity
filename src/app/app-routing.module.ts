import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  // {
  //   path: '',
  //   loadChildren: 'app/unity-index/unity-index.module#UnityIndexModule'
  // },
  {
    path: 'unity-home',
    loadChildren: 'app/unity-home/unity-home.module#UnityHomeModule'
 }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
