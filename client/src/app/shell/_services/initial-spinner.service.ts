import { Injectable } from '@angular/core'
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router'
import { filter, map, Observable, shareReplay, startWith, take } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class InitialSpinnerService {
  readonly appReady$: Observable<boolean> = this.router.events.pipe(
    map(navigationEnded),
    filter((ready) => ready),
    take(1),
    startWith(false),
    shareReplay(1)
  )

  constructor(private router: Router) {}
}

function navigationEnded(routerEvent: any) {
  if (
    routerEvent instanceof NavigationCancel ||
    routerEvent instanceof NavigationEnd ||
    routerEvent instanceof NavigationError
  ) {
    return true
  }

  return false
}
