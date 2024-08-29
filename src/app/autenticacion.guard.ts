import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutenticacionService } from './servicios/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private autenticacion:AutenticacionService) {}

  canActivate(): boolean {
    if (this.autenticacion.sesionIniciada()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}