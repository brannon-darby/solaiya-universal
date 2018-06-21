import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'
import { NavigationEnd, Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
})
export class HeaderComponent implements OnInit {
  public expanded = false
  public nav = [
    { label: 'About', link: 'about' },
    { label: 'Solutions', link: 'solutions' },
    { label: 'Markets', link: 'markets' },
    { label: 'Clients', link: 'clients' },
    { label: 'Why SOLAIYA?', link: 'why-solaiya' },
    { label: 'Contact Us', link: 'contact' },
  ]
  public socialButtons = [
    {
      link: '',
      icon: 'fa fa-lg fa-fw fa-facebook-official',
      class: 'btn btn-sm btn-light m-1',
    },
    {
      link: '',
      icon: 'fa fa-lg fa-fw fa-twitter-square',
      class: 'btn btn-sm btn-light m-1',
    },
    {
      link: '',
      icon: 'fa fa-lg fa-fw fa-linkedin-square',
      class: 'btn btn-sm btn-light m-1',
    },
  ]

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(
      (e) => (e instanceof NavigationEnd ? (this.expanded = false) : '')
    )
  }
}
