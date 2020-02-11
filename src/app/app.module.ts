import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SyntaxLearningComponent } from './syntaxLearning/syntaxLearning.component';

@NgModule({
  declarations: [
    AppComponent,
    SyntaxLearningComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
