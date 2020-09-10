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

  constructor() { }

  ngOnInit(): void {
  }

}
