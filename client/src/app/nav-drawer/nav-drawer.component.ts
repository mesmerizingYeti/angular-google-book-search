import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api'
import { DrawerService } from '../drawer.service';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.css']
})
  export class NavDrawerComponent implements OnInit {
    isOpen: boolean;
    items: MenuItem[];

    constructor(private data: DrawerService) { }

    ngOnInit() {
      this.data.currentValue.subscribe(value => this.isOpen = value);

      this.items = [
        { 
          label: 'Home', 
          icon: 'pi pi-fw pi-home', 
          routerLink: '/home',
          command: () => {
            this.changeDrawerState(false);
          }
        },
        {
          label: 'Search', 
          icon: 'pi pi-fw pi-search', 
          routerLink: '/search',
          command: () => {
            this.changeDrawerState(false);
          }
        },
        {
          label: 'Saved', 
          icon: 'pi pi-fw pi-save', 
          routerLink: '/saved',
          command: () => {
            this.changeDrawerState(false);
          }
        },
      ];
    }

    changeDrawerState(value: boolean) {
      this.data.changeValue(value);
    }
}
