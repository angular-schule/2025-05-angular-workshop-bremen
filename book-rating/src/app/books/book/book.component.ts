import { Component, input, output } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingComponent } from "../book-rating/book-rating.component";

@Component({
  selector: 'app-book',
  imports: [BookRatingComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
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
