import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InterfaceEmpregadoPage } from './interface-empregado.page';

describe('InterfaceEmpregadoPage', () => {
  let component: InterfaceEmpregadoPage;
  let fixture: ComponentFixture<InterfaceEmpregadoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceEmpregadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InterfaceEmpregadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
