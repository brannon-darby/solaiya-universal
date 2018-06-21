import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'why-solaiya',
  template: `
    <h3>{{ header }}</h3>
    <p class="lead text-justify">SOLAIYA, SOLAIYA CZ, and its Partner Companies are committed to providing superior strategic management consulting services in support of our customers for the growth of their businesses globally. We continuously maintain and improve our quality management systems in order to deliver consistent quality services and achieve the highest level of customer satisfaction.</p>
  `,
})
export class WhyComponent implements OnInit {
  public header: string

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit() {
    this.header = 'Why SOLAIYA?'
    this.title.setTitle('SOLAIYA | Why SOLAIYA?')
  }
}
