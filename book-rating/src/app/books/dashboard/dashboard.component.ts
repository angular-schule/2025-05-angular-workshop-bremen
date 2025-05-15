import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Book } from '../shared/book';
import { JsonPipe } from '@angular/common';
import { BookComponent } from "../book/book.component";
import { BookRatingService } from '../shared/book-rating.service';
import { BookCreateComponent } from "../book-create/book-create.component";
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'app-dashboard',
  imports: [BookComponent, BookCreateComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  readonly books = signal<Book[]>([]);
  readonly br = inject(BookRatingService);
  readonly bs = inject(BookStoreService);

  constructor() {

    this.bs.getAll().subscribe(b => this.books.set(b));
  }

  doRateUp(book: Book) {
    const ratedBook = this.br.rateUp(book);
    // const ratedBook = {
    //   ...book,
    //   rating: Math.min(book.rating + 1, 5)
    // }
    this.updateAndSort(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.br.rateDown(book);
    this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book) {

    this.books.update(books => books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating));

    /*
    const books = this.books();

    const newBooks = books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating);

    this.books.set(newBooks);
    */
  }

  addBook(newBook: Book) {
    this.books.update(books => [...books, newBook]);
  }
}
