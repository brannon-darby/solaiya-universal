import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'contact',
  template: `
    <h3>{{ header }}</h3>
    <div class="row">
      <div class="col-2 text-right">
        <i class="fa fa-fw fa-phone"></i>
      </div>
      <div class="col-10">
        <a href="tel:+1-571-527-4935">+1-571-527-4935</a>
      </div>
      <div class="col-2 text-right">
        <i class="fa fa-fw fa-envelope-o"></i>
      </div>
      <div class="col-10">
        <a href="mailto:info@solaiya.com">info@solaiya.com</a>
      </div>
      <div class="col-2 text-right">
        <i class="fa fa-fw fa-map-marker"></i>
      </div>
      <div class="col-10">
        664 A South Military Trail
        <br> Deerfield Beach, FL 33442
      </div>
    </div>
  `,
})
export class ContactComponent implements OnInit {
  public header: string

  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.header = 'Contact Us'
    this.title.setTitle('SOLAIYA | Contact Us')
  }
}
