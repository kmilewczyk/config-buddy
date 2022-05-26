import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CoreComponent } from './core.component'
import { RouterModule } from '@angular/router'

/**
 * The core module that is always loaded after the initial fetch. It consists of the
 * elements vital to every view of the app, as well as various imports that are
 * required to included in the root of the app (like NgRx modules).
 */
@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CoreComponent,
      },
    ]),
  ],
})
export class CoreModule {}
