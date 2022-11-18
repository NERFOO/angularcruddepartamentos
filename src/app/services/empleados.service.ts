import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class EmpleadosService{
    constructor(private _http : HttpClient) { }

    getEmpleados() : Observable<any> {
        var request = "/api/Empleados";
        var url = environment.urlEmpleados + request;

        return this._http.get(url);
    }

    getDepartamentosEmpleados(id : string) : Observable<any> {
        var request = "/api/Empleados/EmpleadosDepartamento/" + id;
        var url = environment.urlEmpleados + request;

        console.log(url)
        return this._http.get(url);
    }
}