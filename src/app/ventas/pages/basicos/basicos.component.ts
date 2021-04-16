import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower : string = 'facundo'; 
  nombreUpper : string = 'FACUNDO'; 
  nombreCompleto : string = 'facundo MonTenEgro'; 
  
  fecha : Date = new Date();

}
