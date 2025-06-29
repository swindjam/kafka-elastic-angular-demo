import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { BooksResponse } from '../interfaces/Book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = 'http://localhost:3000';
  private http = inject(HttpClient);

  getBooks(): Observable<BooksResponse> {
    return this.http.get<BooksResponse>(`${this.baseUrl}/books`);
  }

  addBook(name: string, type: string) {
    this.http.post(`${this.baseUrl}/data`, { name, type }).subscribe();
  }
}
