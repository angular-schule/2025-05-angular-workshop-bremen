import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


class Test {

  #zahl: number;

  constructor(zahl: number) {
    this.#zahl = zahl;
    console.log('Hallo Bremen! 🫏🐕🐈🐓', this.#zahl.toString());
  }
}

const test = new Test(42);
