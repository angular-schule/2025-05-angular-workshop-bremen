import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-create',
  imports: [ReactiveFormsModule],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.scss'
})
export class BookCreateComponent {

  bookForm = new FormGroup({
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),

    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),

    description: new FormControl('', {
      nonNullable: true
    })
  });

  isInvalid(c: FormControl) {
    return c.invalid && c.touched;
  }

  submitForm() {

    const newBook: Book = {
      ...this.bookForm.getRawValue(),
      rating: 1
    };

    // Hands On!
    // 1. Deklariere ein Event mit dem Namen "create"
    // 2. Versende das neue Buch mit dem Event
    // 3. Abboniere das Event im Template der DashboardComponent
    // 4. Füge das neue Buch zum Buch-Array hinzu


    this.bookForm.reset();

  }

}
