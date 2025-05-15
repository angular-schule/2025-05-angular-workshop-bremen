import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingComponent } from "../book-rating/book-rating.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book',
  imports: [
    BookRatingComponent,
    RouterLink
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent {

  book = input.required<Book>();

  rateUp = output<Book>();
  rateDown = output<Book>();

  doRateUp() {
    this.rateUp.emit(this.book());
  }

  doRateDown() {
    this.rateDown.emit(this.book());
  }
}
