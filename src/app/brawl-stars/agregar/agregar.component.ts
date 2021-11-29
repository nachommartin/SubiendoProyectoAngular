import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaz/brawl-stars.interface';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  /*@Input() agregar() {};*/
  @Input() Personajes:Personaje[]=[]
  @Input() Nuevo: Personaje={
    Nombre:"",
    Salud:0
  }
  /*A la hora de imporar tanto nuevo como el array (de ahí viene la vinculación Padre/hijo) 
  lo declaro*/
   @Output() onNewCharacter:EventEmitter<Personaje>= new EventEmitter() 
   /*Emitir el evento para no pasarlo por referencia*/
  agregar(){
    /*
    this.Personajes.push(this.Nuevo) 
    Este modo de añadido es para pasarlo por referencia con el riesgo de modificarlo allá donde
    lo pasamos*/
    this.onNewCharacter.emit(this.Nuevo);
    this.Nuevo={
      Nombre: "",
      Salud: 0
    }   
  }
  constructor() { }

  ngOnInit(): void {
  }

}