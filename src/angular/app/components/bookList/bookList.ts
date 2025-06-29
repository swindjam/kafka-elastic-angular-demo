import {Component, inject, OnChanges, OnInit, signal, SimpleChanges, WritableSignal} from '@angular/core';
import { Book } from '../book/book';
import { BookService } from '../../injectables/BookService';
import {Book as BookInterface, BooksResponse} from '../../interfaces/Book';

@Component({
  selector: 'bookList',
  imports: [Book],
  templateUrl: './bookList.html',
  styleUrl: './bookList.scss'
})
export class BookList implements OnInit, OnChanges {
  protected books: BookInterface[] = [];

  bookName: WritableSignal<string> = signal("");
  bookType: WritableSignal<string> = signal("");

  bookService = inject(BookService);

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(({ books }: BooksResponse) => {
      this.books = books;
    })
  }

  addBook() {
    this.bookService.addBook(this.bookName(), this.bookType());
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log("Changes detected");
  }

  change(e: any) {
    switch(e.target.id) {
      case 'bookName':
        this.bookName.set(e.target.value);
        break;
      case 'bookType':
        this.bookType.set(e.target.value);
        break;
    }
  }
}
