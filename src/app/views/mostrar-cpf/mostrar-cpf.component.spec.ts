import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCPFComponent } from './mostrar-cpf.component';

describe('MostrarCPFComponent', () => {
  let component: MostrarCPFComponent;
  let fixture: ComponentFixture<MostrarCPFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarCPFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarCPFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
