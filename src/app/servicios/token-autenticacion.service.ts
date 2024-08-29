import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class TokenAutenticacionService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const resToken = req.clone({
      setHeaders: {
        Authorization: `${this.autenticacion.obtenerToken()}`
      }
    });

    return next.handle(resToken);
  }
  constructor(private autenticacion: AutenticacionService) { }
}
