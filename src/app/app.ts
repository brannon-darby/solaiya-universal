import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-body>
      <router-outlet></router-outlet>
    </app-body>
    <app-footer></app-footer>
  `,
})
export class AppComponent {
  constructor(private meta: Meta, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('SOLAIYA')
  }
}
