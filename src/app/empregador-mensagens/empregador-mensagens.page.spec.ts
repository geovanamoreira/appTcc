import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmpregadorMensagensPage } from './empregador-mensagens.page';

describe('EmpregadorMensagensPage', () => {
  let component: EmpregadorMensagensPage;
  let fixture: ComponentFixture<EmpregadorMensagensPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpregadorMensagensPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmpregadorMensagensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
