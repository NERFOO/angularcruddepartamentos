import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentosService } from 'src/app/services/departamentos.service';

@Component({
  selector: 'app-detalledepartamento',
  templateUrl: './detalledepartamento.component.html',
  styleUrls: ['./detalledepartamento.component.css']
})
export class DetalledepartamentoComponent implements OnInit {

  constructor(
    private _service : DepartamentosService,
    private _activeRoutes : ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
