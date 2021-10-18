import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CortadoraPModalPage } from './cortadora-pmodal.page';

describe('CortadoraPModalPage', () => {
  let component: CortadoraPModalPage;
  let fixture: ComponentFixture<CortadoraPModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CortadoraPModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CortadoraPModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
