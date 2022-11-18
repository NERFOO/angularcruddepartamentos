import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-detalleempleado',
  templateUrl: './detalleempleado.component.html',
  styleUrls: ['./detalleempleado.component.css']
})
export class DetalleempleadoComponent implements OnInit {
  public empDepartamento! : Array<Empleado>;

  constructor(private _service : EmpleadosService, private _activatedRouter : ActivatedRoute) { }

  cargarDepartamentosEmpleados(id : number) : void {
    this._service.getDepartamentosEmpleados(id.toString()).subscribe( res => {
      this.empDepartamento = res;
      console.log("cargar")
    })
  }

  ngOnInit(): void {
    this._activatedRouter.params.subscribe((parametros : Params) => {
      if (parametros['id'] != null){
        var id = parseInt(parametros['id']);
        this.cargarDepartamentosEmpleados(id);
        console.log("init")
      }
    })
  }

}
