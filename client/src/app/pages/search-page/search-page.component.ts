import { Component, OnInit } from '@angular/core';
import { SearchBooksService } from '../../services/search-books/search-books.service';
import { Book } from '../../books';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  books: Book[];
  flipBook1: boolean = false;
  flipBook2: boolean = false;

  toggleBookCard1 = () => {
    this.flipBook1 = !this.flipBook1;
  }
  toggleBookCard2 = () => {
    this.flipBook2 = !this.flipBook2;
  }

  constructor(private booksService: SearchBooksService) { }

  ngOnInit(): void {
    this.booksService.currentBooks.subscribe(value => {this.books = value; console.log(value)});
  }

}
