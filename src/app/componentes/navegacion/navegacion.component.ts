import { Component } from '@angular/core';
import { AutenticacionService } from '../../servicios/autenticacion.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {

  constructor (public autenticacion: AutenticacionService) {
  }
}
