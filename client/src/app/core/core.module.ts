import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { NavigationComponent } from './navigation/navigation.component'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { CoreRoutingModule } from '@app/core/core-routing.module'
import { CoreComponent } from './core.component'
import { ReactiveComponentModule } from '@ngrx/component';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';
import { TopNavComponent } from './navigation/top-nav/top-nav.component'

/**
 * The core module that is always loaded after the initial fetch. It consists of the
 * elements vital to every view of the app, as well as various imports that are
 * required to included in the root of the app (like NgRx modules).
 */
@NgModule({
  declarations: [NavigationComponent, CoreComponent, SideNavComponent, TopNavComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveComponentModule,
    StoreModule.forRoot({}),
  ],
})
export class CoreModule {}
