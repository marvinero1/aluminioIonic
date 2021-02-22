import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImportadorasPage } from './importadoras.page';

describe('ImportadorasPage', () => {
  let component: ImportadorasPage;
  let fixture: ComponentFixture<ImportadorasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportadorasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImportadorasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
