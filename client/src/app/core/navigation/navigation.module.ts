import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { NavigationComponent } from '@app/core/navigation/navigation.component'
import { SideNavComponent } from '@app/core/navigation/side-nav/side-nav.component'
import { TopNavComponent } from '@app/core/navigation/top-nav/top-nav.component'
import { RouterModule } from '@angular/router'
import { ReactiveComponentModule } from '@ngrx/component'

@NgModule({
  declarations: [NavigationComponent, SideNavComponent, TopNavComponent],
  imports: [
    RouterModule,
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveComponentModule,
  ],
  exports: [NavigationComponent],
})
export class NavigationModule {}
