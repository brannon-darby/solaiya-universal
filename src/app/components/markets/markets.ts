import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'markets',
  template: `<h3>{{ header }}</h3>`,
})
export class MarketsComponent implements OnInit {
  public header: string

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit() {
    this.header = 'Markets'
    this.title.setTitle('SOLAIYA | Markets')
  }
}
