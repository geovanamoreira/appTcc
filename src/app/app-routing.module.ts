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
  },  {
    path: 'login-empregado',
    loadChildren: () => import('./login-empregado/login-empregado.module').then( m => m.LoginEmpregadoPageModule)
  },
  {
    path: 'login-empregadorrr',
    loadChildren: () => import('./login-empregadorrr/login-empregadorrr.module').then( m => m.LoginEmpregadorrrPageModule)
  },
  {
    path: 'pagina-inicial',
    loadChildren: () => import('./pagina-inicial/pagina-inicial.module').then( m => m.PaginaInicialPageModule)
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

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
