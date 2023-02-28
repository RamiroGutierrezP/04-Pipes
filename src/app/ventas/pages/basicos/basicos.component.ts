import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  nombreLower: string = 'ramiro';
  nombreUpper: string = 'RAMIRO';
  nombreCompleto: string = 'RaMirO GutIeRreZ';


  fecha: Date = new Date(); //Hoy

}
