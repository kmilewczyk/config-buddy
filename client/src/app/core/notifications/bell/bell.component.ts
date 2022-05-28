import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-bell',
  templateUrl: './bell.component.html',
  styleUrls: ['./bell.component.scss'],
})
export class BellComponent implements OnInit {
  @Input() open: boolean = false
  @Output() openChange = new EventEmitter<boolean>()

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.open = !this.open
    this.openChange.emit(this.open)
  }
}
