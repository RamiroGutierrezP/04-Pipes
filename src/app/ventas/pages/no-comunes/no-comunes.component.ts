import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  //i18Select
  nombre: string = 'Ramiro';
  genero: string = 'masculino';
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };
  cambiarPersona(){
    this.nombre = 'Victoria';
    this.genero = 'femenino';
  }

  //i18Plural
  clientes: string[] = ['Ramiro', 'Victoria', 'Bonnie', 'China', 'Mami', 'Papi', 'Fran'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes eperando.',
    'other': 'tenemos # clientes eperando.'
  }
  borrarCliente(){
    if (this.clientes.length === 0) {return};
    this.clientes.pop();
  }

  // KeyValue

  persona = {
    nombre: 'Ramiro',
    edad: 22,
    direccion: 'Ottawa, Canadá'
  }

  //JsonPipe
  heroes = [
    {
      nombre: 'Ironman',
      poder: 100
    },
    {
      nombre: 'Hulk',
      poder: 50
    },
    {
      Batman: 'Batman',
      poder: 210
    }
  ]

  //Async

  miObservable = interval(1000); //0,1,2,3...

  valorPromesa = new Promise ((resolve, reject) => {
    setTimeout(()=> {
      resolve('Tenemos data');
    }, 2500);
  });
}
