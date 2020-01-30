import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedNavbarComponent } from './components/app-shared/shared-navbar/shared-navbar.component';
import { SharedFooterComponent } from './components/app-shared/shared-footer/shared-footer.component';
import { InicioComponent } from './components/pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedNavbarComponent,
    SharedFooterComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
