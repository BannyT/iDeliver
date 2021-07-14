import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ShopsComponent } from './pages/shops/shops.component';
import { AddshopComponent } from './pages/addshop/addshop.component';
import {ProductsComponent} from './pages/products/products.component';
import {OrdersComponent} from './pages/orders/orders.component'
import { TabBarsComponent } from './pages/tab-bars/tab-bars.component';
import {GalleryComponent} from './pages/gallery/gallery.component'
import{AboutshopComponent} from './pages/aboutshop/aboutshop.component'




const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: '',redirectTo: 'login',pathMatch: 'full'},
  { path: 'login', component:LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'shops', component:ShopsComponent },
  {path:'addshop',component:AddshopComponent},
  {path:'products',component:ProductsComponent},
  {path:'orders',component:OrdersComponent},
  {path:'tabs',component:TabBarsComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'aboutshop',component:AboutshopComponent}


  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
