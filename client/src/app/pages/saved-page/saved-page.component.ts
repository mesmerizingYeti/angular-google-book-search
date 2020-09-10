import { Component, OnInit } from '@angular/core';
import { Book } from '../../books'
import { SavedBooksService } from '../../services/saved-books/saved-books.service';

@Component({
  selector: 'app-saved-page',
  templateUrl: './saved-page.component.html',
  styleUrls: ['./saved-page.component.css']
})
export class SavedPageComponent implements OnInit {
  books: Book[];

  constructor(private savedBooksService: SavedBooksService) { }

  ngOnInit(): void {
    this.savedBooksService.getBooks()
    this.savedBooksService.currentBooks.subscribe((value) => (this.books = value));
    console.log(this.books)
  }

}
