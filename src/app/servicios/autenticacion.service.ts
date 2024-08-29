import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private RUTA = 'https://candidates-exam.herokuapp.com/api/v1'

  constructor(private http: HttpClient, private router: Router) { }

  ping() {
    return this.http.get(`${this.RUTA}/ping`);
  }
  
  registro(datos: any) {
    return this.http.post(`${this.RUTA}/usuarios`, datos);
  }

  iniciarSesion(datos: any) {
    return this.http.post(`${this.RUTA}/auth/login`, datos);
  }

  sesionIniciada() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  obtenerToken() {
    return localStorage.getItem('token');
  }

  cerrarSesion() {
    localStorage.removeItem('token');
    localStorage.removeItem('url');
    localStorage.removeItem('usuario');
    localStorage.removeItem('url_cv');
    this.router.navigate(['/registro'])
  }
}
