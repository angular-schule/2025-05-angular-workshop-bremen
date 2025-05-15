import { Component, input } from '@angular/core';

@Component({
  selector: 'app-book-details',
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {


  // geht nur mit withComponentInputBinding() in der app.config.ts
  isbn = input.required<string>()

}
