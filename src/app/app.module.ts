import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BootstrapTrainingModule } from './bootstrap-training/bootstrap-training.module';
import { JavascriptTrainingModule } from './javascript-training/javascript-training.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BootstrapTrainingModule,
    JavascriptTrainingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
