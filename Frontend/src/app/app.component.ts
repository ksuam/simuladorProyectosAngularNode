import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { AppMenuComponent } from "./layout/app-menu/app-menu.component";
import { MenubarModule } from 'primeng/menubar';







@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, AppMenuComponent, MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}
  title = 'Simulador';
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [
      {
          label: 'Inicio',
          icon: 'pi pi-home',
          routerLink:'home',


      },
      {
          label: 'Lista de Precios',
          icon: 'pi pi-list',
          routerLink:'lista'
      },
      {
          label: 'Cotizar',
          icon: 'pi pi-dollar',
          routerLink:'cotizar'
      }
  ]

}
}
