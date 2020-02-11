import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindingComponent } from './syntaxLearning/binding/binding.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
