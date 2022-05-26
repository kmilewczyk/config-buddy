import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { map, shareReplay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class ViewportService {
  readonly isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay(1)
    )

  constructor(private breakpointObserver: BreakpointObserver) {}
}
