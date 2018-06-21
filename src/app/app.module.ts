import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TransferHttpCacheModule } from '@nguniversal/common'

import { AppComponent } from './app'
import {
  AboutComponent,
  ClientsComponent,
  ContactComponent,
  HomeComponent,
  MarketsComponent,
  SolutionsComponent,
  WhyComponent,
} from './components'
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  BodyComponent,
  FooterComponent,
  HeaderComponent,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES,
} from './shared/ui'

export const components = [
  AppComponent,
  AboutComponent,
  BodyComponent,
  ClientsComponent,
  ContactComponent,
  FooterComponent,
  HeaderComponent,
  HomeComponent,
  MarketsComponent,
  SolutionsComponent,
  WhyComponent,
]

export const directives = [
  AsideToggleDirective,
  ...NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  ...SIDEBAR_TOGGLE_DIRECTIVES,
]

@NgModule({
  declarations: [...components, ...directives],
  imports: [
    BrowserModule.withServerTransition({ appId: 'solaiya-universal' }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'clients',
        component: ClientsComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'markets',
        component: MarketsComponent,
      },
      {
        path: 'solutions',
        component: SolutionsComponent,
      },
      {
        path: 'why-solaiya',
        component: WhyComponent,
      },
      { path: '**', redirectTo: 'about' },
    ]),
    TransferHttpCacheModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
