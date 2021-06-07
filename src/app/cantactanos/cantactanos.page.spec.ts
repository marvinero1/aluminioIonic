import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CantactanosPage } from './cantactanos.page';

describe('CantactanosPage', () => {
  let component: CantactanosPage;
  let fixture: ComponentFixture<CantactanosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantactanosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CantactanosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
