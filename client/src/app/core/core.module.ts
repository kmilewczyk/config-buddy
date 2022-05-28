import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { CoreRoutingModule } from '@app/core/core-routing.module'
import { CoreComponent } from './core.component'
import { NavigationModule } from '@app/core/navigation/navigation.module'
import { NotificationsModule } from '@app/core/notifications/notifications.module'

/**
 * The core module that is always loaded after the initial fetch. It consists of the
 * elements vital to every view of the app, as well as various imports that are
 * required to included in the root of the app (like NgRx modules).
 */
@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NavigationModule,
    NotificationsModule,
    StoreModule.forRoot({}),
  ],
})
export class CoreModule {}
