import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-componente',
  templateUrl: './nuevo-componente.component.html',
  styleUrls: ['./nuevo-componente.component.css']
})
export class NuevoComponenteComponent {
  numero:number=0; 
  suspendido:string=""; 
  aprobado:string="";
  suspendidos:string[]=[]; 
  alumnos:string[]= ["Nacho", "Salva", "Eli", "Fran"];

  suspender():void{
    this.suspendido= this.alumnos.pop() ||""; 
    this.suspendidos.push(this.suspendido); 
  }

  aprobar():void{
    this.alumnos.push(this.suspendido)
    this.numero=this.suspendidos.indexOf(this.suspendido);
    this.suspendidos.splice(this.numero); 
  }

}
