import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { SearchPageComponent } from '../search-page/search-page.component';
import { SavedPageComponent } from '../saved-page/saved-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'saved', component: SavedPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
