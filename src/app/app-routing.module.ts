import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ShopsComponent } from './pages/shops/shops.component';
import { AddshopComponent } from './pages/addshop/addshop.component';






const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: '',redirectTo: 'login',pathMatch: 'full'},
  { path: 'login', component:LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'shops', component:ShopsComponent },
  {path:'addshop',component:AddshopComponent},
  
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
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./pages/shop/shop.module').then( m => m.ShopPageModule)
  }


  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
