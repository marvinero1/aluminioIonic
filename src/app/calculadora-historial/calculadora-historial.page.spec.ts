import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalculadoraHistorialPage } from './calculadora-historial.page';

describe('CalculadoraHistorialPage', () => {
  let component: CalculadoraHistorialPage;
  let fixture: ComponentFixture<CalculadoraHistorialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraHistorialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculadoraHistorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
