import { Component, OnInit } from '@angular/core'

interface SideNavLink {
  route: string
  label: string
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  links: SideNavLink[] = [
    {
      route: '/dashboard',
      label: 'Dashboard',
    },
    {
      route: '/settings',
      label: 'Settings',
    },
    {
      route: '/about',
      label: 'About',
    },
  ]

  constructor() {}
}
