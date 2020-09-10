import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../../books';
import { BookApiService } from '../book-api/book-api.service';

@Injectable({
  providedIn: 'root'
})
export class SavedBooksService {

  private savedBooks: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>(new Array<Book>());
  currentBooks = this.savedBooks.asObservable();

  constructor(private BookApi: BookApiService) { }

  handleRemoveBook = (_id: string) => {
  }

  getBooks = () => {
    this.BookApi.getSavedBooks()
      .then((books: Array<Object>) => {
        var newBooks = books.map((book: {
          google_id: string,
          title: string,
          authors: [string],
          publishedDate: string,
          description: string,
          image: string,
          link: string
        }) => {
          return new Book(
            book.google_id, 
            book.title,
            book.authors,
            book.publishedDate,
            book.description,
            book.image,
            book.link
          )
        });
        this.savedBooks.next(newBooks);
      })
  }

  setBooks = (books: Book[]) => {
    this.savedBooks.next(books);
  }

}
