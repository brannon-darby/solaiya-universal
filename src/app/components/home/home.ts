import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
})
export class HomeComponent implements OnInit {
  public message: string

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('SOLAIYA')
  }
}
