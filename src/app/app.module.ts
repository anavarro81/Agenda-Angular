import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { NuevoContactoComponent } from './pages/nuevo-contacto/nuevo-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    NuevoContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
