import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventTaman } from './EventTaman';
import { Directives } from './Directives';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    EventTaman,
    Directives
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
