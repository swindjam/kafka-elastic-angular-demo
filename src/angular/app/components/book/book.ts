import { Component } from '@angular/core';

@Component({
  selector: 'book',
  imports: [],
  templateUrl: './book.html',
  styleUrl: './book.scss'
})
export class Book {
  protected name = 'angular';
  protected type = 'paperback';

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  setType(type: string) {
    this.type = type;
  }
}
