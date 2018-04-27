import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';
import { ThirdComponent } from './third.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent, FirstComponent, SecondComponent, ThirdComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
