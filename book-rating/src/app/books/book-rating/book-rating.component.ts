import { Component, computed, effect, input, signal } from '@angular/core';

@Component({
  selector: 'app-book-rating',
  imports: [],
  templateUrl: './book-rating.component.html',
  styleUrl: './book-rating.component.scss'
})
export class BookRatingComponent {

  rating = input.required<number>();
  test = signal<string>('Test');


  // 1. Variante -- einfache Funktion
  getStars() {
    return new Array(this.rating());
  }

  // 2. Variante -- computed Signal
  getStarsComputed = computed(() => {

    // this.test.set('TEST 2222'); // NICHT ERLAUBT!
    return new Array(this.rating())
  });

  constructor() {

    // 3. Variante -- effect (hier nicht notwendig)
    effect(() => {

      // nur im effect darf man andere Signals setzen
      this.test.set('Test' + this.rating())
    });
  }


}

