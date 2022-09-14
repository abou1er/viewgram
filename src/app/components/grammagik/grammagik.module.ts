import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrammagikListComponent } from './grammagik-list/grammagik-list.component';
import { GrammagikSingleComponent } from './grammagik-single/grammagik-single.component';
import { AddGrammagikComponent } from './features/add-grammagik/add-grammagik.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { WebcamModule } from 'ngx-webcam';



@NgModule({
  declarations: [
    GrammagikListComponent,
    GrammagikSingleComponent,
    AddGrammagikComponent
  ],
  imports: [
    CommonModule,
    // FormsModule,
    SharedModule,
    WebcamModule
  ],
  exports:[
    GrammagikListComponent,
  ]
})
export class GrammagikModule { }