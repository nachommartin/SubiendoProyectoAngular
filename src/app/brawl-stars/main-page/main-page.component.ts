import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaz/brawl-stars.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  Bull :Personaje={
    Nombre: "Bull",
    Salud: 1200
  }
  Salvi :Personaje={
    Nombre: "Salvi the great Tequinox",
    Salud: 2000
  }

  Pelaez: Personaje={
    Nombre: "Gitano Peláez",
    Salud: 7000
  }

  Nuevo :Personaje={
    Nombre: "",
    Salud: 0
  }

Personajes:Personaje[]=[this.Bull,this.Salvi,this.Pelaez]; 
  constructor() { }

  agregarNuevoPersonaje(): void{
    this.Personajes.push(this.Nuevo) 
  }

  ngOnInit(): void {
  }



  
}
