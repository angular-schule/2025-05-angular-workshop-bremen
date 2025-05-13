import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  rateUp(book: Book): Book {
    // TODO: implement me!
    return book;
  }

  rateDown(book: Book) {
    // TODO: implement me!
    return book;
  }
} 
