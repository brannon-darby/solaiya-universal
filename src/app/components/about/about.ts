import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'about',
  template: `
    <h3>{{ header }}</h3>
    <p class="lead text-justify">SOLAIYA (pronounced SO-LAY-A) is a Global Organization that combines the experience and expertise of its principals, partners and employees into a new, innovative and thought leading consultancy. The three broad areas of support provided by SOLAIYA are CONSULTING, SYSTEMS and TALENT.</p>
    <p class="lead text-justify">Headquartered in Boca Raton, Florida, USA with offices in Washington, DC and its Prague, Czech Republic based affiliate company SOLAIYA CZ s.r.o., SOLAIYA’s mission is to support the Global Business Community in Corporate Growth, Compliance, Technology and Personnel.</p>
  `,
})
export class AboutComponent implements OnInit {
  public header: string

  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.header = 'About'
    this.title.setTitle('SOLAIYA | About')
  }
}
