import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JugadoresYuraniDiazService } from 'src/app/Services/jugadores-yurani-diaz.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.scss']
})
export class JugadorComponent implements OnInit {
  jugador: any[] = [];
  id: string;
  constructor(private ruta: ActivatedRoute, private jugadorservicio: JugadoresYuraniDiazService) {
    this.id = this.ruta.snapshot.params.id;
  }

  ngOnInit(): void {
    this.tomardatos();
  }
  tomardatos() {
    this.jugadorservicio.obtenerjugador(this.id).subscribe(datos => {
      //      this.jugadores = [];
      console.log(datos.payload.data());
      this.jugador.push(datos.payload.data());

    })
  }
}
