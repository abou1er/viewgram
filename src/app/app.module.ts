import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { GrammagikListComponent } from './components/grammagik/grammagik-list/grammagik-list.component';
import { GrammagikSingleComponent } from './components/grammagik/grammagik-single/grammagik-single.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GrammagikListComponent,
    GrammagikSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
