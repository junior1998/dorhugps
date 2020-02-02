import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-footer',
  templateUrl: './shared-footer.component.html',
  styleUrls: ['./shared-footer.component.scss']
})
export class SharedFooterComponent implements OnInit {
  
  redesSociales = [
    {
      nommbre: 'facebook',
      icono: 'fa-facebook-f',
      enlace: 'https://www.facebook.com/DORHUGPS/'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
