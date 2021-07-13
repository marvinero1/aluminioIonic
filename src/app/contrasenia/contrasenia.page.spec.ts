import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContraseniaPage } from './contrasenia.page';

describe('ContraseniaPage', () => {
  let component: ContraseniaPage;
  let fixture: ComponentFixture<ContraseniaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContraseniaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContraseniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
