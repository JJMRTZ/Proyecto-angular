import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CancionesService {
  private conexion=inject(HttpClient);
  constructor() {
  }
   /**
     * obtenerCanciooo
     */
  public obtenerCanciones(cancion:string):Observable<any>{
      return this.conexion.get('http://ws.audioscrobbler.com/2.0/?method=track.search&track='+cancion+'&api_key=db7fa23de8e288cc06cca7c784d972dc&format=json');
  }

  /**
   * obtenerCancionDetalle
   */
 // public obtenerCancionDetalle(nombreCancion:string):Observable<any> {
 //     return this.conexion.get()
 // }
}
