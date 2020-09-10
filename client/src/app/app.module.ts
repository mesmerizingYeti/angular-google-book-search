import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module'

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule } from 'primeng/dataview';

import { DrawerService } from './services/drawer/drawer.service';
import { SearchBooksService } from './services/search-books/search-books.service';
import { SavedBooksService } from './services/saved-books/saved-books.service';
import { BookApiService } from './services/book-api/book-api.service';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SavedPageComponent } from './pages/saved-page/saved-page.component';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NavDrawerComponent } from './components/nav-drawer/nav-drawer.component';
import { SearchFormComponent } from './components/search-form/search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavDrawerComponent,
    HomePageComponent,
    SearchPageComponent,
    SavedPageComponent,
    SearchFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    SidebarModule,
    MenuModule,
    CardModule,
    InputTextModule,
    DataViewModule,
  ],
  providers: [
    DrawerService,
    SearchBooksService,
    SavedBooksService,
    BookApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
