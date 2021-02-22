import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImportadoraPage } from './importadora.page';

describe('ImportadoraPage', () => {
  let component: ImportadoraPage;
  let fixture: ComponentFixture<ImportadoraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportadoraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImportadoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
