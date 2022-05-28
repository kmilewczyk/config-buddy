import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { ViewportService } from '@app/core/_services/viewport.service'

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  @Output() toggle = new EventEmitter<void>()

  isHandset$ = this.viewport.isHandset$

  constructor(private viewport: ViewportService) {}

  onToggleClick() {
    this.toggle.emit()
  }
}
