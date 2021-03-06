import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];


  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'textos y fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numeros'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-exclamation-circle',
            routerLink: 'no-comunes'
          },   
        ]
      },
      {
        label:'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'hola'
          }
        ]
      }
    ];
  }

}
