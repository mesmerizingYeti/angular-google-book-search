import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing/app-routing.module'
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NavDrawerComponent } from './components/nav-drawer/nav-drawer.component';

import { DrawerService } from './drawer.service';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SavedPageComponent } from './pages/saved-page/saved-page.component';

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
