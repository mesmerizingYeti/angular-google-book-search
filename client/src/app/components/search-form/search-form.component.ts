import { Component, OnInit } from '@angular/core';
import { SearchBooksService } from '../../services/search-books/search-books.service'

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  bookTitle: string ;
  flipBook: boolean = false;

  toggleBookCard = () => {
    this.flipBook = !this.flipBook;
  }

  handleSearch = () => {
    if (this.bookTitle !== undefined) {
      this.searchBooksService.searchForTitle(this.bookTitle)
    }
  }

  constructor(private searchBooksService: SearchBooksService) { }

  ngOnInit(): void {
  }

}
