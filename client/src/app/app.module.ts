import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';

import { DrawerService } from './drawer.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavDrawerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    SidebarModule,
    MenuModule
  ],
  providers: [
    DrawerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
