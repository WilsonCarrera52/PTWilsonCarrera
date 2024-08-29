import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../servicios/perfil.service';
import { NgAlertBoxComponent } from 'ng-alert-box-popup';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {

  usuario = {
    nombre: ''
  }

  archivo = {
    curriculum: ''
  }

  archivoElegido = false;

  ngOnInit(): void {
    this.perfil.cargar().subscribe(
      (res: any) => {
        this.usuario.nombre = res.nombre;
      },
      err => console.log(err)
    );
  }

  constructor(private perfil: PerfilService, private alertas: NgAlertBoxComponent) { }

  archivoSeleccionado(event: any) {
    const archivo = event.target.files[0];

    if (archivo.size <= 5000000) {
      if (archivo.type === 'application/pdf') {
        this.archivo.curriculum = archivo;
        this.archivoElegido = true;
      } else {
        this.alertas.dialog('E', 'Solo se aceptan archivos pdf');
        event.target.value = '';
      }
    } else {
      this.alertas.dialog('E', 'El tamaño del archivo no debe exceder 5 MB');
      event.target.value = '';
    }
  }

  enviarArchivo() {
    if (this.archivoElegido) {
      const form = new FormData();

      form.append('curriculum', this.archivo.curriculum);

      this.perfil.enviarArchivo(form).subscribe(
        (res: any) => {
          console.log(res);
          localStorage.setItem('url_cv', res.url_cv);
          this.alertas.dialog('I', 'Archivo cargado exitosamente');
        },
        err => console.log(err)
      );
    }
  }

  mostrarArchivo() {
    this.perfil.mostrarArchivo().subscribe(
      (res: any) => {
        console.log(res);
        const texto = document.getElementById('mostrar_ruta') as HTMLInputElement;
        texto.value = res.url;
        this.alertas.dialog('I', `Ruta: ${res.url}`)
      },
      err => console.log(err)
    );
  }


}
