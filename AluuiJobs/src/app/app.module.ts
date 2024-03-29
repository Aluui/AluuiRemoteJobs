import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngreedJobsComponent } from './components/ingreed-jobs/ingreed-jobs.component';

import { HttpClientModule } from '@angular/common/http';
import { GithubComponent } from './components/github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    IngreedJobsComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
