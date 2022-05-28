import { Routes } from '@angular/router'
import { routes as prodRoutes, coreRoutes as prodCoreRoutes } from './routes.prod'

export const routes: Routes = [
  ...prodRoutes,
  {
    path: 'dev',
    loadChildren: () => import('./dev/dev.module').then((m) => m.DevModule),
  },
]

export const coreRoutes: Routes = prodCoreRoutes
