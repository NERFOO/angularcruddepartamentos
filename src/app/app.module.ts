import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';

import { appRoutingProviders, routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import  { HttpClientModule } from '@angular/common/http';
import { DepartamentosService } from './services/departamentos.service';
import { InsertardepartamentoComponent } from './components/insertardepartamento/insertardepartamento.component';
import { Error404Component } from './components/error404/error404.component';
import { EditardepartamentoComponent } from './components/editardepartamento/editardepartamento.component';
import { DetalledepartamentoComponent } from './components/detalledepartamento/detalledepartamento.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { DetalleempleadoComponent } from './components/detalleempleado/detalleempleado.component';
import { EmpleadosService } from './services/empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DepartamentosComponent,
    InsertardepartamentoComponent,
    Error404Component,
    EditardepartamentoComponent,
    DetalledepartamentoComponent,
    EmpleadosComponent,
    DetalleempleadoComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule ,
    HttpClientModule ,
    routing
  ],
  providers: [appRoutingProviders, DepartamentosService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
