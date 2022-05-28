import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'
import { map, shareReplay } from 'rxjs/operators'

export enum DeviceType {
  Handset,
  Tablet,
  Web,
  Unknown,
}

const breakPointMap = new Map([
  [Breakpoints.HandsetPortrait, DeviceType.Handset],
  [Breakpoints.HandsetLandscape, DeviceType.Handset],
  [Breakpoints.TabletPortrait, DeviceType.Tablet],
  [Breakpoints.TabletLandscape, DeviceType.Tablet],
  [Breakpoints.WebPortrait, DeviceType.Web],
  [Breakpoints.WebLandscape, DeviceType.Web],
])

@Injectable({
  providedIn: 'root',
})
export class ViewportService {
  readonly breakpoint$: Observable<string | undefined>
  readonly device$: Observable<DeviceType>
  readonly isHandset$: Observable<boolean>
  readonly isTablet$: Observable<boolean>
  readonly isWeb$: Observable<boolean>

  private readonly deviceMap$: Observable<BreakpointState>

  constructor(private breakpointObserver: BreakpointObserver) {
    this.deviceMap$ = this.initDeviceMap$()
    this.breakpoint$ = this.initBreakpoint$()
    this.device$ = this.initDeviceType$()

    this.isHandset$ = this.is$(DeviceType.Handset)
    this.isTablet$ = this.is$(DeviceType.Tablet)
    this.isWeb$ = this.is$(DeviceType.Web)
  }

  private initDeviceType$() {
    return this.breakpoint$.pipe(
      map((result) => (result ? breakPointMap.get(result)! : DeviceType.Unknown)),
      shareReplay(1)
    )
  }

  private initDeviceMap$() {
    return this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.Web])
      .pipe(shareReplay(1))
  }

  private initBreakpoint$() {
    return this.deviceMap$.pipe(
      map((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) return query
        }

        return undefined
      }),
      shareReplay(1)
    )
  }

  private is$(type: DeviceType): Observable<boolean> {
    return this.device$.pipe(
      map((device) => device === type),
      shareReplay(1)
    )
  }
}
