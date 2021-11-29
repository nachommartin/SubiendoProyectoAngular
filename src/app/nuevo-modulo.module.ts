import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContadorComponent } from './contador.component';

@NgModule({
  declarations: [
    ContadorComponent
    // Hay que añadir en el html el nombre del selector de cada componente añadido
  ],
  imports: [
    BrowserModule,
    CommonModule
    // Es bueno, el 95% de las veces importar el CommonModule
    // Aquí se puede importar otros módulos
  ],

  exports: [
    ContadorComponent
  ],
  providers: [],
})
export class NuevoModuloModule { }
