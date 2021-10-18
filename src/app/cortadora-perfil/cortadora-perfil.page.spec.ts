import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CortadoraPerfilPage } from './cortadora-perfil.page';

describe('CortadoraPerfilPage', () => {
  let component: CortadoraPerfilPage;
  let fixture: ComponentFixture<CortadoraPerfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CortadoraPerfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CortadoraPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
