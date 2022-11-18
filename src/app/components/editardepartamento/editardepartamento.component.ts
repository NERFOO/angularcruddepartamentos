import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentosService } from 'src/app/services/departamentos.service';

@Component({
  selector: 'app-editardepartamento',
  templateUrl: './editardepartamento.component.html',
  styleUrls: ['./editardepartamento.component.css']
})
export class EditardepartamentoComponent implements OnInit {
  public departamento! : Departamento;

  @ViewChild("cajanumero") cajaNumero! : ElementRef;
  @ViewChild("cajanombre") cajaNombre! : ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidad! : ElementRef;

  constructor(
    private _service : DepartamentosService,
    private _activeRoute : ActivatedRoute,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params : Params) => {
      var num = parseInt(params['num']);
      this.departamento = new Departamento(num, params['nom'], params['loc'])
    })
  }

  modificarDepartamento() : void {
    var nom = this.cajaNombre.nativeElement.value;
    var loc = this.cajaLocalidad.nativeElement.value;

    this.departamento.nombre = nom;
    this.departamento.localidad = loc;

    this._service.update(this.departamento).subscribe( res => {
      this._router.navigate(['/']);
    })
  }

}
