import { Component, signal } from '@angular/core';
import { Book } from '../shared/book';
import { JsonPipe } from '@angular/common';
import { BookComponent } from "../book/book.component";

@Component({
  selector: 'app-dashboard',
  imports: [JsonPipe, BookComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  readonly books = signal<Book[]>([]);

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
}
