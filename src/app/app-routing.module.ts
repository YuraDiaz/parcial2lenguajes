import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JugadorComponent } from './Components/jugador/jugador.component';
import { JugadoresComponent } from './Components/jugadores/jugadores.component';

const routes: Routes = [
  { path: '', component: JugadoresComponent, pathMatch: 'full' },
  { path: 'jugador/:id', component: JugadorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
