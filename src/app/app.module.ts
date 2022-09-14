import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{  HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { GrammagikListComponent } from './components/grammagik/grammagik-list/grammagik-list.component';
import { GrammagikSingleComponent } from './components/grammagik/grammagik-single/grammagik-single.component';
import { AddGrammagikComponent } from './components/grammagik/features/add-grammagik/add-grammagik.component';
import { FormsModule } from '@angular/forms';
import { GrammagikModule } from './components/grammagik/grammagik.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    HttpClientModule,
    GrammagikModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
