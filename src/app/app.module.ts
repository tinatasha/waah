import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { FormsComponent } from './forms/forms.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AppHighlightDirective } from './app-highlight.directive';
import { CountPipePipe } from './count-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    FormsComponent,
    QuotesComponent,
    AppHighlightDirective,
    CountPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
