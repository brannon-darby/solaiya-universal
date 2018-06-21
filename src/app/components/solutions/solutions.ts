import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'solutions',
  templateUrl: './solutions.html',
})
export class SolutionsComponent implements OnInit {
  public header: string

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit() {
    this.header = 'Solutions'
    this.title.setTitle('SOLAIYA | Solutions')
  }
}
