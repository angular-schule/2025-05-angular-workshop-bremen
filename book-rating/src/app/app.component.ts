import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  // alter weg (mit Magie)
  title = 'Book Rating';

  constructor() {

    setTimeout(() => this.title = 'blubb', 2000);
  }
}
