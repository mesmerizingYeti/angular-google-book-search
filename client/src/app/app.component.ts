import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { DrawerService } from './drawer.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  public isDrawerOpen: boolean;

  constructor(private primengConfig: PrimeNGConfig, private data: DrawerService) {}

  ngOnInit() {
    // initialize ripple effect for primeng
    this.primengConfig.ripple = true;
    // keep track of nav drawer status
    this.data.currentValue.subscribe(value => this.isDrawerOpen = value)
  }
}
