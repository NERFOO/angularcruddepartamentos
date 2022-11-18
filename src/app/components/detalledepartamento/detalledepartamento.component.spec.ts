import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalledepartamentoComponent } from './detalledepartamento.component';

describe('DetalledepartamentoComponent', () => {
  let component: DetalledepartamentoComponent;
  let fixture: ComponentFixture<DetalledepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalledepartamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalledepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
