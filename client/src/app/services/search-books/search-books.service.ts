import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../../books' 
import { BookApiService } from '../book-api/book-api.service'

@Injectable({
  providedIn: 'root'
})
export class SearchBooksService {

  private books: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>(new Array<Book>());
  currentBooks = this.books.asObservable()

  constructor(private BookApi: BookApiService) { }

  searchForTitle = (title: string) => {
    this.BookApi.searchForBooks(title)
      .then((data: { items: [] }) => {
        var searchBooks = data.items.map(
          (item : {
            id: string,
            volumeInfo: { 
              authors: [string], 
              description: string, 
              imageLinks: {
                thumbnail: string
              }, 
              infoLink: string,
              publishedDate: string,
              title: string
          }}) => {
            return new Book(
              item.id,
              item.volumeInfo.title, 
              item.volumeInfo.authors, 
              item.volumeInfo.publishedDate, 
              item.volumeInfo.description, 
              item.volumeInfo.imageLinks.thumbnail, 
              item.volumeInfo.infoLink
            )
        })
        this.books.next(searchBooks)
      })
      .catch((err) => console.error(err))
  }
}
