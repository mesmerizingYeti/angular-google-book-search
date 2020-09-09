import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  bookTitle: string ;
  flipBook: boolean = false;

  toggleBookCard() {
    this.flipBook = !this.flipBook;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
