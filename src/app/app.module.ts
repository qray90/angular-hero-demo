import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SyntaxLearningComponent } from './syntaxLearning/syntaxLearning.component';

@NgModule({
  declarations: [
    AppComponent,
    SyntaxLearningComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
