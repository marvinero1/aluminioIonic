import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisCortesPage } from './mis-cortes.page';

describe('MisCortesPage', () => {
  let component: MisCortesPage;
  let fixture: ComponentFixture<MisCortesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisCortesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisCortesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
