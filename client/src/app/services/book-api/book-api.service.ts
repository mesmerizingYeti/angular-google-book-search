import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../books'

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  constructor(private httpClient: HttpClient) { }

  searchForBooks = (bookTitle: string) => 
    this.httpClient.get(`/api/googlebooks/${bookTitle}`).toPromise()

  getSavedBooks = () => this.httpClient.get('/api/books').toPromise()

  addBook = (book: Book) => this.httpClient.post('/api/books', book).toPromise()

  deleteBook = (_id: string) => this.httpClient.delete(`/api/books/${_id}`).toPromise()

}
