import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentosService } from 'src/app/services/departamentos.service';

@Component({
  selector: 'app-insertardepartamento',
  templateUrl: './insertardepartamento.component.html',
  styleUrls: ['./insertardepartamento.component.css']
})
export class InsertardepartamentoComponent implements OnInit {
  public departamento! : Departamento;

  @ViewChild("cajanumero") cajaNumero! : ElementRef;
  @ViewChild("cajanombre") cajaNombre! : ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidad! : ElementRef;

  //Router para redireccionar
  //ActivatedRoute para recoger los parametros
  constructor(private _service : DepartamentosService, private _router : Router) { }

  insertarDepartamento() : void {
    var num = parseInt(this.cajaNumero.nativeElement.value);
    var nom = this.cajaNombre.nativeElement.value;
    var loc = this.cajaLocalidad.nativeElement.value;

    var newDept = new Departamento(num, nom, loc);

    this._service.create(newDept).subscribe( res => {
      this.departamento = res;
    })

    this._service.getDepartamentos().subscribe( res => {
      this._router.navigate([""]);
    });
  }

  ngOnInit(): void {
  }

}
