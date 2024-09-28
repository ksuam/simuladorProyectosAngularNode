import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaPreciosComponent } from './lista-precios/lista-precios.component';
import { AppMenuComponent } from './layout/app-menu/app-menu.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { NotFoundComponent } from './not-found/not-found.component';




export const routes: Routes = [
  {path: '', component:HomeComponent },
  {path: 'home', component:HomeComponent},
  {path:'lista', component: ListaPreciosComponent},
  {path:'cotizar', component:CotizadorComponent },
  {path:'add', component:AddEditProductComponent},
  {path:'edit/:id', component: AddEditProductComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
];
