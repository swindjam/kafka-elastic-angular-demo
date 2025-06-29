import { TestBed } from '@angular/core/testing';
import { BookList } from './bookList';

describe('BookList', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookList],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BookList);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BookList);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular');
  });
});
