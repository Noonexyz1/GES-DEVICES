import { Component } from '@angular/core';
import { Topbar } from "./component/topbar";
import { Sidebar } from "./component/sidebar";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [Topbar, Sidebar, CommonModule, RouterModule],
  template: `<div>
    <app-topbar></app-topbar>
    <app-sidebar></app-sidebar>
    <div>
      <h1>Contenido principal router-outlet</h1>
      <router-outlet></router-outlet>
    </div>
  </div>`
})
export class Layout {
  
}
