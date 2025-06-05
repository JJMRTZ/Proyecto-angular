import { ICancion } from './../../models/icancion';
import { CancionesService } from './../../services/canciones.service';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-canciones',
  imports: [FormsModule, MatFormFieldModule, MatInputModule,MatButtonModule,RouterLink],
  templateUrl: './canciones.component.html',
  styleUrl: './canciones.component.scss'
})
export class CancionesComponent {
  public cancion = signal<string>('');
  private CancionesService = inject(CancionesService);
  public canciones=signal<ICancion[]>([])
  /**
   * obtenerCancion
   */
  public obtenerCancion() {
    this.CancionesService.obtenerCanciones(this.cancion()).subscribe(resp=> {
      this.canciones.set(resp.results.trackmatches.track)
      console.log(resp.results.trackmatches.track);
    })
  }
}
