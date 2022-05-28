import { Component } from '@angular/core'
import { map } from 'rxjs/operators'
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout'
import { filter, Observable, shareReplay } from 'rxjs'
import { ViewportService } from '@app/core/_services/viewport.service'

interface DashboardItem {
  id: string
  title: string
}

interface DashboardLayout {
  cols: number
  items: {
    id: string
    cols: number
    rows: number
  }[]
}

interface DashboardItemLayout extends DashboardItem {
  cols: number
  rows: number
}

const DASHBOARD_ITEMS: DashboardItem[] = [
  { id: 'changes', title: 'Changes' },
  { id: 'cache_size', title: 'Cache size' },
  { id: 'cleanup', title: 'Home cleaning' },
  { id: 'deprecation', title: 'Deprecations' },
]

const DASHBOARD_LAYOUT: Record<string, DashboardLayout> = {
  [Breakpoints.HandsetPortrait]: {
    cols: 1,
    items: [],
  },
  [Breakpoints.HandsetLandscape]: {
    cols: 2,
    items: [
      { id: 'changes', cols: 2, rows: 1 },
      { id: 'cleanup', cols: 1, rows: 1 },
    ],
  },
  [Breakpoints.TabletPortrait]: {
    cols: 2,
    items: [
      { id: 'changes', cols: 2, rows: 1 },
      { id: 'cleanup', cols: 1, rows: 2 },
    ],
  },
  [Breakpoints.TabletLandscape]: {
    cols: 3,
    items: [
      { id: 'changes', cols: 2, rows: 1 },
      { id: 'cleanup', cols: 1, rows: 2 },
    ],
  },
  [Breakpoints.WebPortrait]: {
    cols: 3,
    items: [
      { id: 'changes', cols: 2, rows: 1 },
      { id: 'cleanup', cols: 1, rows: 2 },
    ],
  },
  [Breakpoints.WebLandscape]: {
    cols: 3,
    items: [
      { id: 'changes', cols: 2, rows: 1 },
      { id: 'cleanup', cols: 1, rows: 2 },
    ],
  },
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cols$: Observable<number>
  cards$: Observable<DashboardItemLayout[]>

  private layout$: Observable<DashboardLayout>

  constructor(private viewport: ViewportService) {
    this.layout$ = this.viewport.breakpoint$.pipe(
      filter((layout) => layout !== undefined),
      map((breakpoint) => DASHBOARD_LAYOUT[breakpoint as string]),
      shareReplay({ refCount: true, bufferSize: 1 })
    )

    this.cols$ = this.layout$.pipe(map((layout) => layout.cols))

    this.cards$ = this.layout$.pipe(
      map((layout) => {
        return DASHBOARD_ITEMS.map((item) => {
          const itemLayout = layout.items.find((layout) => layout.id === item.id) ?? {}

          return {
            ...item,
            cols: 1,
            rows: 1,
            ...itemLayout,
          }
        })
      })
    )
  }
}
