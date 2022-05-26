import { Injectable } from '@angular/core'
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router'
import { map, Observable, of, timer } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ThrottleResolver implements Resolve<boolean> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return timer(2000).pipe(map(() => true))
  }
}
