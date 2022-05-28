import { Component, OnInit } from '@angular/core'

interface SideNavLink {
  route: string
  label: string
  disabled: boolean
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
      disabled: false,
    },
    {
      route: '/version-control',
      label: 'Version Control',
      disabled: true,
    },
    {
      route: '/settings',
      label: 'Settings',
      disabled: true,
    },
    {
      route: '/about',
      label: 'About',
      disabled: true,
    },
  ]

  constructor() {}
}
