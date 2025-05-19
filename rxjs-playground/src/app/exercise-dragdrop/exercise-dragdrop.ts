import { Component, ElementRef, Signal, signal, viewChild } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { fromEvent, concatMap, takeUntil, first, switchMap, map, Observable } from 'rxjs';

@Component({
  templateUrl: './exercise-dragdrop.ng.html',
  styleUrl: './exercise-dragdrop.scss'
})
export class ExerciseDragdrop {

  readonly target = viewChild<ElementRef>('target');

  readonly mouseMove$ = fromEvent<MouseEvent>(document, 'mousemove');
  readonly mouseUp$ = fromEvent<MouseEvent>(document, 'mouseup');
  readonly mouseDown$ = toObservable(this.target).pipe(
    first(e => !!e),
    concatMap(target => fromEvent<MouseEvent>(target.nativeElement, 'mousedown'))
  );

  readonly drag$: Observable<{ x: number; y: number }>;
  readonly targetPosition: Signal<{ x: number; y: number }>;

  constructor() {
    /**
     * Nutze RxJS, um die rote Box mit Drag-and-drop zu bewegen.
     * 
     * Die Methode `setTargetPosition(e: MouseEvent)` ändert die Position der Box.
     * Nutze die Observables `mouseMove$`, `mouseDown$` und `mouseUp$` in einer geeigneten Kombination.
     * Beginne damit, dass die Box am Mauszeiger klebt.
     * Sorge dann dafür, dass dieser Prozess erst beim Klick (`mouseDown$`) beginnt.
     * Beende den Prozess, sobald `mouseUp$` feuert.
     * 
     * Zusatz: Erstelle das Signal `targetPosition` mit `toSignal()` direkt aus dem Observable.
     */

    /******************************/

    this.drag$ = this.mouseDown$.pipe(
      switchMap(() =>
        this.mouseMove$.pipe(
          map(moveEvent => ({ x: moveEvent.pageX, y: moveEvent.pageY })),
          takeUntil(this.mouseUp$)
        )
      )
    );

    this.targetPosition = toSignal(this.drag$, {
      initialValue: { x: 100, y: 80 }
    });
    
    /******************************/
  }
}
