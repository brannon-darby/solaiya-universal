import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'clients',
  template: `<h3>{{ header }}</h3>`,
})
export class ClientsComponent implements OnInit {
  public header: string

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit() {
    this.header = 'Clients'
    this.title.setTitle('SOLAIYA | Clients')
  }
}
