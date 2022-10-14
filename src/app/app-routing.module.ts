import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login-empregado',
    loadChildren: () => import('./login-empregado/login-empregado.module').then( m => m.LoginEmpregadoPageModule)
  },
  {
    path: 'login-empregadorrr',
    loadChildren: () => import('./login-empregadorrr/login-empregadorrr.module').then( m => m.LoginEmpregadorrrPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'cadastro-empregado',
    loadChildren: () => import('./cadastro-empregado/cadastro-empregado.module').then( m => m.CadastroEmpregadoPageModule)
  },
  {
    path: 'cadastro-empregadorrr',
    loadChildren: () => import('./cadastro-empregadorrr/cadastro-empregadorrr.module').then( m => m.CadastroEmpregadorrrPageModule)
  },
  {
    path: 'perfil-empregado',
    loadChildren: () => import('./perfil-empregado/perfil-empregado.module').then( m => m.PerfilEmpregadoPageModule)
  },
  {
    path: 'perfil-empregador',
    loadChildren: () => import('./perfil-empregador/perfil-empregador.module').then( m => m.PerfilEmpregadorPageModule)
  },
  {
    path: 'interface-empregado',
    loadChildren: () => import('./interface-empregado/interface-empregado.module').then( m => m.InterfaceEmpregadoPageModule)
  },
  {
    path: 'interface-empregador',
    loadChildren: () => import('./interface-empregador/interface-empregador.module').then( m => m.InterfaceEmpregadorPageModule)
  },  {
    path: 'empregado-vagas',
    loadChildren: () => import('./empregado-vagas/empregado-vagas.module').then( m => m.EmpregadoVagasPageModule)
  },
  {
    path: 'empregado-equipe',
    loadChildren: () => import('./empregado-equipe/empregado-equipe.module').then( m => m.EmpregadoEquipePageModule)
  },
  {
    path: 'empregado-mensagens',
    loadChildren: () => import('./empregado-mensagens/empregado-mensagens.module').then( m => m.EmpregadoMensagensPageModule)
  },
  {
    path: 'empregado-cadastro',
    loadChildren: () => import('./empregado-cadastro/empregado-cadastro.module').then( m => m.EmpregadoCadastroPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
