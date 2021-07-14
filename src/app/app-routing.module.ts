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
   {path:'addshop',component:AddshopComponent}

  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
