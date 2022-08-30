import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroEmpregadorrrPage } from './cadastro-empregadorrr.page';

describe('CadastroEmpregadorrrPage', () => {
  let component: CadastroEmpregadorrrPage;
  let fixture: ComponentFixture<CadastroEmpregadorrrPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroEmpregadorrrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroEmpregadorrrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
