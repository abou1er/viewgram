import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrammagikListComponent } from './grammagik-list/grammagik-list.component';
import { LeGrammagikComponent } from './le-grammagik/le-grammagik.component';

const routes: Routes = [
  {path: 'grammagiks', component: GrammagikListComponent },

    
  {path: 'le-grammagik/:id', component: LeGrammagikComponent },

    

    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class GrammagiksRoutingModule { }
