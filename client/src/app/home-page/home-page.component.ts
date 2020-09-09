import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  handleSearchRedirect() {
    console.log('Redirecting to search page')
    this.router.navigateByUrl('/search');
  }
  
  handleSavedRedirect() {
    console.log('Redirecting to saved page')
    this.router.navigateByUrl('/saved');
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
