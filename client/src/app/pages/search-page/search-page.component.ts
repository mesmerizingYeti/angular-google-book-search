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

  constructor(private booksService: SearchBooksService) { }

  ngOnInit(): void {
    this.booksService.currentBooks.subscribe(value => {this.books = value});
  }

}
