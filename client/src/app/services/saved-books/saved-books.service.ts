import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../../books';

@Injectable({
  providedIn: 'root'
})
export class SavedBooksService {

  private savedBooks: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>(new Array<Book>());
  currentBooks = this.savedBooks.asObservable();

  constructor() { }

  addBook(book: Book): void {
    this.savedBooks
      .subscribe(books => {
        books.push(book);
        this.savedBooks.next(books);
      })
  }

  removeBook(book: Book): void {
    this.savedBooks
      .subscribe(books => {
        books = books.filter(currentBook => currentBook._id !== book._id);
        this.savedBooks.next(books);
      })
  }

}
