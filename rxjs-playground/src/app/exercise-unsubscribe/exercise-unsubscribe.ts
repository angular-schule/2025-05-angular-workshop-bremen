import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Subject, ReplaySubject, timer, Subscription, takeWhile, takeUntil, tap } from 'rxjs';

import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  templateUrl: './exercise-unsubscribe.ng.html',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseUnsubscribe {

  interval$ = toSignal(timer(0, 1000).pipe(
    //tap(console.log)
  ), { initialValue: 0 })
}
