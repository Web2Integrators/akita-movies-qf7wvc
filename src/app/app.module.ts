import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';

@NgModule({
  imports: [BrowserModule, MoviesModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
