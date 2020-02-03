import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-footer',
  templateUrl: './shared-footer.component.html',
  styleUrls: ['./shared-footer.component.scss']
})
export class SharedFooterComponent implements OnInit {

  // ====================================================================
  // En la matriz de una dimencion que esta abajo
  // es donde se agregan las redes sociales para que salgan en el footer
  // ====================================================================
  
  redesSociales = [
    {
      nommbre: 'Facebook',
      icono: 'fa-facebook-f',
      enlace: 'https://www.facebook.com/DORHUGPS/'
    },
    {
      nommbre: 'Instagram',
      icono: 'fa-instagram',
      enlace: 'https://www.facebook.com/DORHUGPS/'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
