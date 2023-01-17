import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CounterComponent } from './counter/counter.component';
import { RedboxComponent } from './redbox/redbox.component';
import { TodoComponent } from './todo/todo.component';
import { MovieplayerComponent } from './movieplayer/movieplayer.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PersoonsgegevensComponent } from './persoonsgegevens/persoonsgegevens.component';
import { RandomComponent } from './random/random.component';
import { RandomBoundariesComponent } from './random-boundaries/random-boundaries.component';
import { TodoControllerComponent } from './todo-controller/todo-controller.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CounterComponent,
    RedboxComponent,
    TodoComponent,
    MovieplayerComponent,
    CalculatorComponent,
    PersoonsgegevensComponent,
    RandomComponent,
    RandomBoundariesComponent,
    TodoControllerComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "welcome",
        component: WelcomeComponent
      },
      {
        path: "movieplayer",
        component: MovieplayerComponent
      },
      {
        path: "todo",
        component: TodoComponent
      },
      {
        path: "redbox",
        component: RedboxComponent
      },
      {
        path: "**",
        component: WelcomeComponent
      }
    ], {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
