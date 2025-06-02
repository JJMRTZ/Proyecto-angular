import { Component, inject, signal } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ArtistasService } from '../../services/artistas.service';
import { IArtists } from '../../models/iartists';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-artistas',
  imports: [FormsModule, MatFormFieldModule, MatInputModule,MatButtonModule,RouterLink],
  templateUrl: './artistas.component.html',
  styleUrl: './artistas.component.scss'
})
export class ArtistasComponent {
  public artista = signal<string>('');
  private ArtirstasService = inject(ArtistasService);
  public artistas=signal<IArtists[]>([])
  /**
   * obteenerArtista
   */
  public obteenerArtista() {
    this.ArtirstasService.obtenerArtistas(this.artista()).subscribe(resp=> {
      this.artistas.set(resp.results.artistmatches.artist)
      console.log(resp.results.artistmatches.artist);
    })
  }
}
