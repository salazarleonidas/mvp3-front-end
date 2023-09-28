import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './processo/listar/listar.component';
import { CadastroComponent } from './processo/cadastro/cadastro.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditComponent } from './processo/edit/edit.component';

const routes: Routes = [
  { path: 'processos/cadastrar', component: CadastroComponent, title: 'Cadastrar processo' },
  { path: 'processos/editar', component: EditComponent, title: 'Editar processo' },
  { path: 'processos', component: ListarComponent, title: 'Processos' },
  { path: '', redirectTo: '/processos', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
