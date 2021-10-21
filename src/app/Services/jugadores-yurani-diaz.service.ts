import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadoresYuraniDiazService {


  constructor(private fs: AngularFirestore) {

  }
  public todojugador(): Observable<any> {

    return this.fs.collection('jugadores').snapshotChanges();
  }
  public obtenerjugador(id: string): Observable<any> {
    return this.fs.collection('jugadores').doc(id).snapshotChanges();
  }
}
