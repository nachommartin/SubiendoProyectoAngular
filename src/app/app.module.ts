import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NuevoModuloModule } from './nuevo-modulo.module';


import { AppComponent } from './app.component';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { BrawlStarsModule } from './brawl-stars/brawl-stars.module';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponenteComponent
    // Hay que añadir en el html el nombre del selector de cada componente añadido
  ],
  imports: [
    BrowserModule,
    NuevoModuloModule,
    BrawlStarsModule
    // Es bueno, el 95% de las veces importar el CommonModule
    // Aquí se puede importar otros módulos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
