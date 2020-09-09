import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing/app-routing.module'
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';

import { DrawerService } from './drawer.service';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SavedPageComponent } from './saved-page/saved-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavDrawerComponent,
    HomePageComponent,
    SearchPageComponent,
    SavedPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    SidebarModule,
    MenuModule,
    CardModule,
  ],
  providers: [
    DrawerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
