import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BellComponent } from './bell/bell.component'
import { NotificationOutletComponent } from './notification-outlet/notification-outlet.component'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [BellComponent, NotificationOutletComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [NotificationOutletComponent],
})
export class NotificationsModule {}
