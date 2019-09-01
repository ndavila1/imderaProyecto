import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFirestoreModule, AngularFirestore } from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import { AngularFireAuth } from "@angular/fire/auth";


import { EscenariosComponent } from './components/escenarios/escenarios.component';
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    EscenariosComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule
  ],
  providers: [AngularFirestore,AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
