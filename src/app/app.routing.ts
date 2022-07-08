import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { PokedexModule } from './pokedex/pokedex.module'
//import { routes } from './routes';

export const routes: Routes =[
    //{ path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    //{ path: 'register',           component: SignupComponent },
    //{ path: 'landing',          component: LandingComponent },
    //{ path: 'login',          component: LoginComponent },
    //
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio' , loadChildren: ()=> import('./inicio/inicio.module').then(m=>m.InicioModule) },
    { path: 'pokedex', loadChildren: () => import('./pokedex/pokedex.module').then(m => m.PokedexModule) },
    { path: '**', redirectTo: 'inicio' }
]; 

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { 
  
}
