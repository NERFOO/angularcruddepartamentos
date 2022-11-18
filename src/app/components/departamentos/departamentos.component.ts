import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentosService } from 'src/app/services/departamentos.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {
  public departamentos! : Array<Departamento>;

  constructor(
    private _service : DepartamentosService,
    private _activeRoutes : ActivatedRoute
  ) { }

  cargarDepartamentos() : void {
    this._service.getDepartamentos().subscribe( res => {
      this.departamentos = res;
    })
  }

  eliminarDepartamento(id : number) : void {
    this._service.delete(id.toString()).subscribe( () => {
      this.cargarDepartamentos();
    })
  }

  ngOnInit(): void {
    this._activeRoutes.params.subscribe((parametros : Params) => {
      if(parametros['id'] != null) {
        var id = parseInt(parametros['id']);
        this.eliminarDepartamento(id);
      }
    })

    this.cargarDepartamentos();
  }

}
