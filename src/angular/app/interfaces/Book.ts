export interface Book {
  name: string;
  type: string;
}

export interface BooksResponse {
  books: Book[];
}
