import { Component, input } from '@angular/core';
import { Book } from '../shared/book';
import { JsonPipe } from '@angular/common';
import { BookRatingComponent } from "../book-rating/book-rating.component";

@Component({
  selector: 'app-book',
  imports: [BookRatingComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  book = input.required<Book>();
}
