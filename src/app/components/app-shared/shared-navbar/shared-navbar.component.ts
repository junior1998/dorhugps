import { Component, OnInit } from '@angular/core';

type Sections = 'Inicio' | 'Servicios' | 'GPS' | 'Compatibilidad'
@Component({
  selector: 'app-shared-navbar',
  templateUrl: './shared-navbar.component.html',
  styleUrls: ['./shared-navbar.component.scss']
})
export class SharedNavbarComponent implements OnInit {

  constructor() { }


  // ==============================
  //  estados de las secciones
  // ==============================
  estadoSeccion: Sections = 'Inicio';
  // ==============================
  //   Valor del scroll
  // ==============================
  SCROLL = 0;
  ngOnInit() {
    this.comprobarVisibilidad();
  }
  // =======================================
  // Este metodo es para manejar el scroll
  // y saber que seccion esta activa de la
  // pagina y mostrarla en el navbar
  // ======================================
  comprobarVisibilidad() {
    window.onscroll = () => {
      this.SCROLL = document.documentElement.scrollTop || document.body.scrollTop;
      const encabezadoHeight = document.getElementById('encabezado_height').clientHeight;
      const servicioHeight = document.getElementById('servicios_height').clientHeight;
      const detallesHeight = document.getElementById('detalles_height').clientHeight;
      const compatibilidadHeight = document.getElementById('compatibilidad_height').clientHeight;
      const scroolModificado = this.SCROLL + 75;
      // ===============================================================================================
      //     En la ternaria a continuacion se suma el tamaño de los div y se comparan con el scrollTop
      // ===============================================================================================
      // tslint:disable-next-line: no-unused-expression
      // tslint:disable-next-line: max-line-length
      encabezadoHeight >= scroolModificado ?  this.estadoSeccion = 'Inicio' : (encabezadoHeight + servicioHeight) >= scroolModificado ? this.estadoSeccion = 'Servicios' :
      // tslint:disable-next-line: max-line-length
      (encabezadoHeight + servicioHeight + detallesHeight) >= scroolModificado  ? this.estadoSeccion = 'GPS' : (encabezadoHeight + servicioHeight + detallesHeight + compatibilidadHeight) >= scroolModificado ? this.estadoSeccion = 'Compatibilidad' : ' '

    };

  }

}
