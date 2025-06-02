import { Component, inject,OnDestroy,OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArtistasService } from '../../../services/artistas.service';
import { IArtistDetalle } from '../../../models/iartist-detalle';

@Component({
  selector: 'app-artistas-detalles',
  imports: [RouterModule],
  templateUrl: './artistas-detalles.component.html',
  styleUrl: './artistas-detalles.component.scss'
})
export class ArtistasDetallesComponent implements OnInit,OnDestroy {
  private route=inject(ActivatedRoute);
  private detalleService=inject(ArtistasService);
  public miSubscripcion!:Subscription;
  public NombeArtista = signal<string>('')
  public artista = signal<IArtistDetalle>({
    name: ''
  })
  constructor(){

  }
  /**
   * obtenerDetalles
   */
  public obtenerDetalles() {
    this.detalleService.obtenerDetalle(this.NombeArtista()).subscribe(artist=>{
      this.artista.set(artist)
      console.log(this.artista());
    })
  }
  //Para asegurarse que el valor de los parametros ya esta disponible se debe de hacer desde el OnInit
  ngOnInit():void{
    this.miSubscripcion=this.route.params.subscribe(parametros => {
      this.NombeArtista.set(parametros["Artista"]);
    });
    this.obtenerDetalles();
  }
  ngOnDestroy(): void {
    this.miSubscripcion.unsubscribe();
  }
}
