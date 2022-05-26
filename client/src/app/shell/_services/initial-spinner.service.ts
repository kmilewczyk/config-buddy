import {Injectable} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";
import {filter, map, Observable, shareReplay, startWith, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InitialSpinnerService {
  readonly appReady$: Observable<boolean> = this.router.events.pipe(
    map(routerEvent => {
      if (routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationError) {
        return true;
      }

      return false;
    }), filter(ready => ready), take(1), startWith(false), shareReplay(1)
  )

  constructor(private router: Router) {
  }
}
