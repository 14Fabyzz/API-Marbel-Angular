import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './component/character-list/character-list.component';
import { HomeComponent } from './pages/home/home.component';
import { DeadpoolHelloComponent } from './pages/deadpool-hello/deadpool-hello.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    HomeComponent,
    DeadpoolHelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
