import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: string = 'facundo montenegro'
  valor : number = 1000;
  objeto = {
    nombre: 'Facundo',
    apellido: 'Montenegro',
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.objeto);
        
  }

}
