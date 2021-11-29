import { Component } from '@angular/core';

@Component({
  selector: 'contador-root',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  resul : number = 0;

  contar():void{
    this.resul=this.resul+1;
  }


}