import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  constructor(private httpClient: HttpClient) { }

  searchForBooks = (bookTitle: string) => 
    this.httpClient.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${bookTitle}&key=AIzaSyAETxvXScdVFLmhNttP35AvouHSR9zEMow`)

  getSavedBooks = () => {

  }

  addBook = () => {

  }

  deleteBook = () => {

  }

}
