import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IArtistDetalle } from '../models/iartist-detalle';

@Injectable({
  providedIn: 'root'
})
export class ArtistasService {
  //Para poder usar la libreria de http client hay que proveeer el modulo de httpclient en el app.config.ts
  private conexion = inject(HttpClient);
  constructor() { }
  /**
   * obtenerArtistas
   */
  public obtenerArtistas(nombre:string): Observable<any> {

    return this.conexion.get('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist='+nombre+'&api_key=db7fa23de8e288cc06cca7c784d972dc&format=json');

  }
  /**
   * obtenerDetalle
   */
  public obtenerDetalle(NombreArtista:string): Observable<IArtistDetalle>{
    return this.conexion.get<IArtistDetalle>('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+NombreArtista+'&api_key=db7fa23de8e288cc06cca7c784d972dc&format=json').pipe(
      map((response:any)=>{
        return response.artist
      })
    )
  }
}
