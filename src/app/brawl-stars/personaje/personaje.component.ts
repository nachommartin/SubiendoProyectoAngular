import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaz/brawl-stars.interface';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {
  @Input() Personajes: Personaje[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}