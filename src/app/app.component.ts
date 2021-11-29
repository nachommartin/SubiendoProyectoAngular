import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resul : number = 0;

  acumular(numero :number){
    this.resul=this.resul+numero;
  }

  resetear(){
    this.resul=0;
  }

  conversor(cadena: string){
    let cadenaConvertida :number = + cadena; 
    return cadenaConvertida; 
  }
}
