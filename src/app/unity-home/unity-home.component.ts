import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unity-home',
  template: `<router-outlet></router-outlet>`
  // template: `
  // <!-- Unity app main page Date 10 Sep 2017 -->
  //   <div>
  //     <nav class="row navbar navbar-default">
  //       <div class="container-fluid">
  //         <div class="navbar-header">
  //           <a class="navbar-brand">UNITY</a>
  //         </div>
  //         <ul class="nav navbar-nav" style="margin-left: 40%;">
  //           <li><a class="navbar-brand" routerLink="/#" routerLinkActive="active">Unity Name</a></li>
  //         </ul>
  //         <ul class="nav navbar-nav navbar-right">
  //           <li><a class="navbar-brand" routerLink="#" routerLinkActive="active">Profile</a></li>
  //           <li><a class="navbar-brand" routerLink="#" routerLinkActive="active">Logout</a></li>
  //         </ul>
  //       </div>
  //     </nav>
  //   </div>
  // <!-- Unity app main page close -->
  // <router-outlet></router-outlet>
  // `
})
export class UnityHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
