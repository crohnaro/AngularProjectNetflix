import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FullBannerComponent } from './components/full-banner/full-banner.component';
import { ListTittlesComponent } from './components/list-tittles/list-tittles.component';
import { FooterComponent } from './components/footer/footer.component';
import { TittleComponent } from './components/tittle/tittle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FullBannerComponent,
    ListTittlesComponent,
    FooterComponent,
    TittleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
