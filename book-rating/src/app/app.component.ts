import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./books/dashboard/dashboard.component";
import { Store } from '@ngrx/store';
import { BookActions } from './books/store/book.actions';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  readonly title = signal('Book Rating');
  readonly #store = inject(Store);

  constructor() {
    this.#store.dispatch(BookActions.loadBooks())
  }
}
