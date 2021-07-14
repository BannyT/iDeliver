import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ShopsComponent } from './pages/shops/shops.component';
import { AddshopComponent } from './pages/addshop/addshop.component';
import {ProductsComponent} from './pages/products/products.component';
import {OrdersComponent} from './pages/orders/orders.component'
// import { TabBarsComponent } from './pages/tab-bars/tab-bars.component';





const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: '',redirectTo: 'login',pathMatch: 'full'},
  { path: 'login', component:LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'shops', component:ShopsComponent },
  {path:'addshop',component:AddshopComponent},
  {path:'products',component:ProductsComponent},
  {path:'orders',component:OrdersComponent},
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tab-bars/tab-bars.module').then( m => m.TabBarsPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'aboutshop',
    loadChildren: () => import('./pages/aboutshop/aboutshop.module').then( m => m.AboutshopPageModule)
  }


  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
