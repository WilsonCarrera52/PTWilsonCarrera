import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private RUTA = 'https://candidates-exam.herokuapp.com/api/v1/usuarios/';

  constructor(private http: HttpClient) { }

  cargar() {
    return this.http.get(this.RUTA);
  }

  enviarArchivo(archivo: any) {
    return this.http.post(`${this.RUTA}${localStorage.getItem('url')}/cargar_cv`, archivo);
  }

  mostrarArchivo() {
    return this.http.get(`${this.RUTA}mostrar_cv`);
  }
}
