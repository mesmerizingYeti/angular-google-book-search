import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../books';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  @Input() books: Book[];
  @Input() page: string;

  modalOpen: boolean = false;
  modalHeader: string = "";
  modalDescription: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  handleOpenDescription = (google_id: string) => {
    var book: Book = this.books.filter((book) => book.google_id === google_id)[0];
    this.modalHeader = book.title;
    this.modalDescription = book.description ? book.description : "No description available";
    this.modalOpen = true;
  }

}
