import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: "app <router-outlet></router-outlet>"
})
export class AppComponent {
  // TODO: Here add the spinner from the shell
  title = 'client';
}
