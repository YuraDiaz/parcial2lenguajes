import { Component, OnInit } from '@angular/core';
import { docSnapshots } from '@angular/fire/firestore';
import { onSnapshot } from 'firebase/firestore';
import { JugadoresYuraniDiazService } from 'src/app/Services/jugadores-yurani-diaz.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.scss']
})
export class JugadoresComponent implements OnInit {
  jugadores: any[] = [];
  constructor(private jugadorservicio: JugadoresYuraniDiazService) { }

  ngOnInit(): void {
    this.tomardatos();
  }
  tomardatos() {

    this.jugadorservicio.todojugador().subscribe(datos => {
      datos.forEach((element: any) => {
        this.jugadores.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
        console.log(this.jugadores);

      });

    })



  }

}
