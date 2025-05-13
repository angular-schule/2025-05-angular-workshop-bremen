import { Component, input } from '@angular/core';

@Component({
  selector: 'app-book-rating',
  imports: [],
  templateUrl: './book-rating.component.html',
  styleUrl: './book-rating.component.scss'
})
export class BookRatingComponent {

  rating = input.required<number>();


  // 1. Variante -- einfache Funktion
  getStars() {
    return new Array(this.rating());
  }

}
