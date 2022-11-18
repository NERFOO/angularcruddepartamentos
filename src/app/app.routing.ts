import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { DepartamentosComponent } from "./components/departamentos/departamentos.component";
import { InsertardepartamentoComponent } from "./components/insertardepartamento/insertardepartamento.component";
import { Error404Component } from "./components/error404/error404.component";
import { EditardepartamentoComponent } from "./components/editardepartamento/editardepartamento.component";
import { DetalledepartamentoComponent } from "./components/detalledepartamento/detalledepartamento.component";
import { DetalleempleadoComponent } from "./components/detalleempleado/detalleempleado.component";
import { EmpleadosComponent } from "./components/empleados/empleados.component";

const appRoutes : Routes = [
    {path : "" , component : DepartamentosComponent},
    {path : "insertar" , component : InsertardepartamentoComponent},
    {path : "edit/:num/:nom/:loc" , component : EditardepartamentoComponent},
    {path : "delete/:id" , component : DepartamentosComponent},
    {path : "detalle/:id" , component : DetalledepartamentoComponent},
    {path : "empleados" , component : EmpleadosComponent},
    {path : "detalleempleado/:id" , component : DetalleempleadoComponent},
    {path : "**" , component : Error404Component},
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);


