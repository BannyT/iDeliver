import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabBarsPageRoutingModule } from './tab-bars-routing.module';

import { TabBarsPage } from './tab-bars.page';
const routes: Routes = [
  {
    path: '',
    component: TabBarsPage,
    children: [
      {
        path: 'gallery',
        children: [
          {
            path: '',
            loadChildren: '../gallery/gallery.module#GalleryPageModule'
          }
        ]
      },
      {
        path: 'aboutshop',
        children: [
          {
            path: '',
            loadChildren: '../aboutshop/aboutshop.module#AboutshopPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/gallery',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabBarsPageRoutingModule
  ],
  declarations: [TabBarsPage]
})
export class TabBarsPageModule {}
