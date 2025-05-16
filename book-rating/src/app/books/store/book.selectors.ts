import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBook from './book.reducer';

export const selectBookState = createFeatureSelector<fromBook.State>(
  fromBook.bookFeatureKey
);

export const selectBooks = createSelector(
  selectBookState,
  state => state.books
);

export const selectLoading = createSelector(
  selectBookState,
  state => state.loading
);

export function getSpecialBook(title: string) {
  return createSelector(
    selectBooks,
    state => state.find(x => x.title === title)
  );
}

export const angularSelector = getSpecialBook('Angular');
