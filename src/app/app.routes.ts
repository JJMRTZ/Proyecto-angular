import { Routes } from '@angular/router';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { CancionesComponent } from './components/canciones/canciones.component';
import { ArtistasDetallesComponent } from './components/artistas/artistas-detalles/artistas-detalles.component';
import { CancionDetalleComponent } from './components/canciones/cancion-detalle/cancion-detalle.component';

export const routes: Routes = [
  {
    path:'Artistas',
    component:ArtistasComponent
  },
  {
    path:'Canciones',
    component:CancionesComponent
  },
  {
    path:'',
    redirectTo:'Artistas',
    pathMatch:'full'
  },
  {
    path:'Artistas/:Artista',
    component:ArtistasDetallesComponent
  },
  {
    path:'Canciones/:Cancion',
    component:CancionDetalleComponent
  }
];
