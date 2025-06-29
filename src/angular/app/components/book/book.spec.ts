import { TestBed } from '@angular/core/testing';
import { Book } from './book';

describe('BookList', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Book],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Book);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Book);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular');
  });
});
