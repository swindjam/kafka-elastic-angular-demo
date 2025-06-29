import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookList } from './components/bookList/bookList';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular';
}
