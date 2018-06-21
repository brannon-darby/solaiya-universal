import { Component } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-body',
  template: `
    <div class="app-body">
      <div class="container">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class BodyComponent { }
