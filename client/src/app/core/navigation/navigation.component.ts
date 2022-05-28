import { Component } from '@angular/core'
import { ViewportService } from '@app/core/_services/viewport.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  isHandset$ = this.viewPort.isHandset$

  constructor(private viewPort: ViewportService) {}
}
