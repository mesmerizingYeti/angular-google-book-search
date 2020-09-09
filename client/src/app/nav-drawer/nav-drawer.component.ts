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
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Search', icon: 'pi pi-fw pi-search'},
        {label: 'Saved', icon: 'pi pi-fw pi-save'},
      ];
    }

    changeDrawerState(value: boolean) {
      this.data.changeValue(value);
    }
}
