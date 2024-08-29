import { Component } from '@angular/core';
import { NgAlertBoxComponent } from 'ng-alert-box-popup';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  datos = {
    email: '',
    password: ''
  }

  constructor(private alertas: NgAlertBoxComponent,
    private autenticacion: AutenticacionService,
    private router: Router) { }

  iniciarSesion() {
    this.autenticacion.iniciarSesion(this.datos).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('url', res.url);
        localStorage.setItem('usuario', res.usuario);
        this.alertas.dialog('I', 'Bienvenido/a');
        this.router.navigate(['/perfil']);
      },
      err => console.log(err)
    );
  }
}
