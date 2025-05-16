import { Component, inject, input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';
import { catchError, concatMap, map, mergeMap, of, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-book-details',
  imports: [RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {

  // geht nur mit withComponentInputBinding() in der app.config.ts
  // isbn = input.required<string>();

  router = inject(ActivatedRoute);
  bs = inject(BookStoreService);

  book = toSignal(this.router.paramMap.pipe(
    map(paramMap => paramMap.get('isbn') || ''),
    switchMap(isbn => this.bs.getSingle(isbn).pipe(
      catchError((err: HttpErrorResponse) => of({
        title: 'FEHLER',
        description: err.message
      }))
    ))
  ))

}
