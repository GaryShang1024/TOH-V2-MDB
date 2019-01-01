
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroTopComponent } from './components/hero-top/hero-top.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroAddComponent } from './components/hero-add/hero-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroTopComponent,
    HeroDetailComponent,
    HeroAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
