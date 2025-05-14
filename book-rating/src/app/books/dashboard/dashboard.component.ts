import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Book } from '../shared/book';
import { JsonPipe } from '@angular/common';
import { BookComponent } from "../book/book.component";
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'app-dashboard',
  imports: [JsonPipe, BookComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  readonly books = signal<Book[]>([]);
  readonly br = inject(BookRatingService);

  constructor() {

    // 🦆
    this.books.set([{
      isbn: '000',
      title: 'Angular',
      description: 'Tolles Buch (aber alt)',
      rating: 5
    }, {
      isbn: '111',
      title: 'jQuery',
      description: 'Gnadenlos in den DOM',
      rating: 3
    }, {
      isbn: '222',
      title: 'React',
      description: 'Setzt Standards',
      rating: 1
    }])
  }

  doRateUp(book: Book) {
    // const ratedBook = this.br.rateUp(book);
    const ratedBook = {
      ...book,
      rating: Math.min(book.rating + 1, 5)
    }
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
}
