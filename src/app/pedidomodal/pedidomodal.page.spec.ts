import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedidomodalPage } from './pedidomodal.page';

describe('PedidomodalPage', () => {
  let component: PedidomodalPage;
  let fixture: ComponentFixture<PedidomodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidomodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedidomodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
