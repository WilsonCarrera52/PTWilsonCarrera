import { Component } from '@angular/core';
import { NgAlertBoxComponent } from 'ng-alert-box-popup';
import { AutenticacionService } from '../../servicios/autenticacion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  constructor(private alertas: NgAlertBoxComponent, private autenticacion: AutenticacionService) { }

  datos = {
    nombre: '',
    email: '',
    password: '',
    password_confirmation: ''
  }

  registrar() {
    if (this.datos.password !== '' && this.datos.password === this.datos.password_confirmation) {
      this.autenticacion.registro(this.datos).subscribe(
        res => {
          console.log(res);
          this.alertas.dialog('I', 'Usuario creado exitosamente');
        }, err => console.log(err)
      );
    } else {
      this.alertas.dialog('E', 'Las contraseñas no coinciden');
    }
  }
}
