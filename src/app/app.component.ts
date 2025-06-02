import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { BarraNavComponent } from "./barra-nav/barra-nav.component";

@Component({
  selector: 'app-root',
  imports: [ MatButtonModule, BarraNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Playlist';
}
