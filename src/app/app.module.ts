import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscenariosComponent } from './components/escenarios/escenarios.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule, AngularFirestore } from "@angular/fire/firestore";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    EscenariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
