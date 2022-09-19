import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrammagikListComponent } from './grammagik-list/grammagik-list.component';

const routes: Routes = [
  {path: 'grammagiks', component: GrammagikListComponent },

    
  

    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class GrammagiksRoutingModule { }
