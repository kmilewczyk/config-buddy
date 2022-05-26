import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-core',
  template: ` <app-navigation><router-outlet></router-outlet></app-navigation> `,
  styles: [],
})
export class CoreComponent {
  constructor() {}
}
