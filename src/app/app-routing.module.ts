import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent } from './componentes/home/home.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { PromocionesComponent } from './componentes/promociones/promociones.component';
import { AboutComponent } from './componentes/about/about.component';

import { About2Component } from './componentes/about2/about2.component';
import { DesBurritosComponent } from './componentes/des-burritos/des-burritos.component';
import { DesAguasComponent } from './componentes/des-aguas/des-aguas.component';
import { DesTortasComponent } from './componentes/des-tortas/des-tortas.component';
import { DesDonasComponent } from './componentes/des-donas/des-donas.component';

import { VerProductosComponent } from './componentes/ver-productos/ver-productos.component';

import { CrearProductosComponent } from './componentes/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './componentes/editar-productos/editar-productos.component';

import { LoginComponent } from './componentes/login/login.component';

import { ContactoComponent } from './componentes/contacto/contacto.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'productos',
    component: ProductosComponent
  },
  
  {
    path:'promociones',
    component: PromocionesComponent
  },
  {
    path:'desaguas',
    component: DesAguasComponent
  },
  {
    path:'desdonas',
    component: DesDonasComponent
  },
  {
    path:'desburritos',
    component: DesBurritosComponent
  },
  {
    path:'destortas',
    component: DesTortasComponent
  },
  {
    path:'about',
    component: AboutComponent
  }
  ,{
    path:'about2',
    component: About2Component
  }
  ,{
    path:'contacto',
    component: ContactoComponent
  }
  ,
  {
    path:'verProductos',
    component: VerProductosComponent
  }
  ,
  {
    path:'crearProductos',
    component: CrearProductosComponent
  }
  ,
  {
    path:'editarProductos',
    component: EditarProductosComponent
  }
  ,
  {
    path:'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
