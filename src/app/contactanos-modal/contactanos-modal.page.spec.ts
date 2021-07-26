import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactanosModalPage } from './contactanos-modal.page';

describe('ContactanosModalPage', () => {
  let component: ContactanosModalPage;
  let fixture: ComponentFixture<ContactanosModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactanosModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactanosModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
