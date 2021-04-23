import { Component} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  // i18nSelect

  nombre : string = 'Facundo';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural

  clientes : string[] = ['María','Facundo','Fernando','Eduardo'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'

  }

  cambiarCliente(){
    this.nombre = 'Maria';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.pop()
  }

  // KeyValue pipe 

  persona = {
    nombre: 'Facundo',
    edad: 18,
    direccion: 'Piquillín, Córdoba'
  }

  // json Pipe
  heroes = [
    {
    nombre: 'Superman',
    vuela: true
    },
    {
    nombre: 'Robin',
    vuela: false
    },
    {
    nombre: 'Aquaman',
    vuela: false
    },
  ]

  // Async pipe

  miObservable = interval(2000)

  valorPromesa = new Promise( (resolve,reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa, tenemos data de promesa')
    },3500)
  },);


}
