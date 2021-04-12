import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalfavoritosPage } from './modalfavoritos.page';

describe('ModalfavoritosPage', () => {
  let component: ModalfavoritosPage;
  let fixture: ComponentFixture<ModalfavoritosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalfavoritosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalfavoritosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
