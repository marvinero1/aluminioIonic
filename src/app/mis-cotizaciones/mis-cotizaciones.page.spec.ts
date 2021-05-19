import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisCotizacionesPage } from './mis-cotizaciones.page';

describe('MisCotizacionesPage', () => {
  let component: MisCotizacionesPage;
  let fixture: ComponentFixture<MisCotizacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisCotizacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisCotizacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
