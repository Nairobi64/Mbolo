import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { httpInterceptorProviders } from './interceptors';
import { CommonModule } from '@angular/common';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MboloProdComponent } from './mbolo-prod/mbolo-prod.component';
import { MboloListComponent } from './mbolo-list/mbolo-list.component';
import { MboloFormComponent } from './mbolo-form/mbolo-form.component';
import { MboloConnexionComponent } from './mbolo-connexion/mbolo-connexion.component';
import { UniquePageComponent } from './unique-page/unique-page.component';
import { BaniereListComponent } from './baniere-list/baniere-list.component';
import { MboloInscriptionComponent } from './mbolo-inscription/mbolo-inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MboloProdComponent,
    MboloListComponent,
    MboloFormComponent,
    MboloConnexionComponent,
    UniquePageComponent,
    BaniereListComponent,
    MboloInscriptionComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
   
 
  ],
  providers: [httpInterceptorProviders
],
  bootstrap: [AppComponent]
})
export class AppModule { }
