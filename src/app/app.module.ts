import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './componentes/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { ProductosComponent } from './componentes/productos/productos.component';
import { PromocionesComponent } from './componentes/promociones/promociones.component';
import { AboutComponent } from './componentes/about/about.component';
import { DesBurritosComponent } from './componentes/des-burritos/des-burritos.component';
import { DesAguasComponent } from './componentes/des-aguas/des-aguas.component';
import { DesTortasComponent } from './componentes/des-tortas/des-tortas.component';
import { DesDonasComponent } from './componentes/des-donas/des-donas.component';
import { VerProductosComponent } from './componentes/ver-productos/ver-productos.component';
import { CrearProductosComponent } from './componentes/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './componentes/editar-productos/editar-productos.component';
import { LoginComponent } from './componentes/login/login.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {environment}from '../environments/environment';
//servicios de firebase
import {AngularFirestoreModule} from '@angular/fire/firestore';
// import { HttpModule } from '@angular/http';
import {AngularFireStorageModule} from '@angular/fire/storage';
import{AngularFireDatabaseModule} from "@angular/fire/database";
import{AngularFireAuthModule} from "@angular/fire/auth";
import { About2Component } from './componentes/about2/about2.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    PromocionesComponent,
    AboutComponent,
    DesBurritosComponent,
    DesAguasComponent,
    DesTortasComponent,
    DesDonasComponent,
    VerProductosComponent,
    CrearProductosComponent,
    EditarProductosComponent,
    LoginComponent,
    About2Component,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
