import { Routes } from '@angular/router'
import { CoreComponent } from '@app/core/core.component'

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@app/core/core.module').then((m) => m.CoreModule),
  },
]

export const coreRoutes: Routes = [
  {
    path: '',
    component: CoreComponent,
  },
]
