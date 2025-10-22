import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Para *ngIf, *ngFor
import { ReactiveFormsModule } from '@angular/forms'; // Para formularios

import { AppRoutingModule } from './app-routing.module';

// --- Tus Componentes (NO-STANDALONE) ---
import { AppComponent } from './app.component';
import { CharacterListComponent } from './component/character-list/character-list.component';
import { HomeComponent } from './pages/home/home.component';
import { DeadpoolHelloComponent } from './pages/deadpool-hello/deadpool-hello.component';

// --- Tus Componentes (STANDALONE) ---
import { LoginComponent } from './pages/login/login.component'; 

@NgModule({
  declarations: [
    AppComponent, // Correcto, ahora va en declarations
    CharacterListComponent,
    HomeComponent,
    DeadpoolHelloComponent
    // LoginComponent NO va aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule, // Para que los componentes de arriba usen *ngIf
    ReactiveFormsModule, // Para que los componentes de arriba usen formularios
    LoginComponent // LoginComponent (standalone) se importa aquí
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent] // Correcto, esto inicia el AppComponent
})
export class AppModule { }