import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LogarComponent } from './logar/logar.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
{path:'', redirectTo:'logar', pathMatch:'full'},

  {path:'logar', component:LogarComponent},
  {path:'cadastrar', component:CadastrarComponent},

  {path: 'inicio', component: InicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
