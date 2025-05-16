import { Component, OnDestroy, inject, signal } from '@angular/core';
import { AsyncPipe, DecimalPipe, JsonPipe } from '@angular/common';
import { Subject, BehaviorSubject, ReplaySubject, Observable, share, takeUntil, shareReplay } from 'rxjs';

import { MeasureValuesService } from './measure-values.service';
import { HistoryWindow } from '../shared/history-window/history-window';

@Component({
  templateUrl: './exercise-multicast.ng.html',
  imports: [HistoryWindow, AsyncPipe, DecimalPipe, JsonPipe]
})
export class ExerciseMulticast implements OnDestroy {

  #mvs = inject(MeasureValuesService);

  readonly listeners = signal<number[]>([]);
  logStream$ = new ReplaySubject<string>();
  #destroy$ = new Subject<void>();
  #listenerId = 1;

  measureValues$: Observable<number>; // später: Subject<number>;

  constructor() {
    /**************!!**************/
    // this.measureValues$ = this.#mvs.getValues();

    // 2. multicast (share) the original Observable
    // this.measureValues$ = this.#mvs.getValues().pipe(
    //   share()
    // );

    // 3. multicast (shareReplay) mit Cache
    this.measureValues$ = this.#mvs.getValues().pipe(
      shareReplay({
        refCount: true,
        bufferSize: 1
      })
    );


    /**************!!**************/

  }

  addListener() {
    this.listeners.update(listeners => [...listeners, this.#listenerId++]);
  }

  addConsoleListener() {
    const index = this.#listenerId++;
    this.measureValues$.pipe(takeUntil(this.#destroy$)).subscribe(e => this.logStream$.next(`Listener #${index}: ${e}`));
  }

  ngOnDestroy(): void {
    this.#destroy$.next();
  }

}
