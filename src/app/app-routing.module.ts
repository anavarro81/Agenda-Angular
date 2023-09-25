import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './pages/agenda/agenda.component'
import { NuevoContactoComponent } from './pages/nuevo-contacto/nuevo-contacto.component'

const routes: Routes = [

  {
    path: "", component: AgendaComponent   
  },

  {
    path: "nuevo-contacto", component: NuevoContactoComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
