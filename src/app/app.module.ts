import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
@NgModule({
  imports: [BrowserModule, MoviesModule,AkitaNgDevtools.forRoot(),
   ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
