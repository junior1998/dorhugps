import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor() { }

  // ====================================================
  //    Matriz de una sola dimension, con el propocito
  //     de manejar los datos de 'Nuestros servicio',
  //      para una facil manipulacion en un futuro.
  // ==================================================
 
  contenidoCarta = [
    {
      icono: '../../../../assets/icono_servicios/iconos7.png',
      titulo: 'Apagado y encendido del motor.',
      enlace: '#gps_card1',
      // tslint:disable-next-line: max-line-length
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias eligendi corrupti a earum fugiat enim magni est unde numquam. Ipsum corrupti vitae quam eligendi nulla maxime accusantium dolores debitis. Veritatis?'
    },
    {
      icono: '../../../../assets/icono_servicios/iconos6.png',
      titulo: 'Georeferencias',
      enlace: '#gps_card2',
      // tslint:disable-next-line: max-line-length
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias eligendi corrupti a earum fugiat enim magni est unde numquam. Ipsum corrupti vitae quam eligendi nulla maxime accusantium dolores debitis. Veritatis?'
    },
    {
      icono: '../../../../assets/icono_servicios/iconos5.png',
      titulo: 'Límite de velocidad',
      enlace: '#gps_card3',
      // tslint:disable-next-line: max-line-length
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias eligendi corrupti a earum fugiat enim magni est unde numquam. Ipsum corrupti vitae quam eligendi nulla maxime accusantium dolores debitis. Veritatis?'
    },
    {
      icono: '../../../../assets/icono_servicios/iconos4.png',
      titulo: 'Historial y Reportes',
      enlace: '#gps_card4',
      // tslint:disable-next-line: max-line-length
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias eligendi corrupti a earum fugiat enim magni est unde numquam. Ipsum corrupti vitae quam eligendi nulla maxime accusantium dolores debitis. Veritatis?'
    },
    {
      icono: '../../../../assets/icono_servicios/iconos3.png',
      titulo: ' Seguimiento en tiempo real',
      enlace: '#gps_card5',
      // tslint:disable-next-line: max-line-length
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias eligendi corrupti a earum fugiat enim magni est unde numquam. Ipsum corrupti vitae quam eligendi nulla maxime accusantium dolores debitis. Veritatis?'
    },
    {
      icono: '../../../../assets/icono_servicios/iconos2.png',
      titulo: 'Control de flotas',
      enlace: '#gps_card6',
      // tslint:disable-next-line: max-line-length
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias eligendi corrupti a earum fugiat enim magni est unde numquam. Ipsum corrupti vitae quam eligendi nulla maxime accusantium dolores debitis. Veritatis?'
    }
  ];

  ngOnInit() {

  }



  

}
