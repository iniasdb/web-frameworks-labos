import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeSelectComponent } from './welcome-select/welcome-select.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { TextComponent } from './lifecycle/text/text.component';
import { TextToggleComponent } from './lifecycle/text-toggle/text-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    WelcomeComponent,
    WelcomeSelectComponent,
    LifecycleComponent,
    TextComponent,
    TextToggleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
