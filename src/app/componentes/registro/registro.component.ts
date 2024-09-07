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
    if (this.datosLlenados()) {
      if (this.datos.password === this.datos.password_confirmation) {
        this.autenticacion.registro(this.datos).subscribe(
          res => {
            console.log(res);
            this.alertas.dialog('I', 'Usuario creado exitosamente');
          }, err => { this.alertas.dialog('E', `Error en el ingreso de datos`); console.log(err);}
        );
      } else {
        this.alertas.dialog('E', 'Las contraseñas no coinciden');
      }
    } else {
      this.alertas.dialog('E', 'Debe llenar todos los campos');
    }
  }

  datosLlenados() {
    let nombre = this.datos.nombre !== '';
    let email = this.datos.email !== '';
    let password = this.datos.password !== '';
    let password_confirmation = this.datos.password_confirmation !== '';

    return nombre && email && password && password_confirmation;
  }
}
