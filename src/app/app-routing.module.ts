import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrammagikListComponent } from './components/grammagik/grammagik-list/grammagik-list.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {path: 'grammagiks', component: GrammagikListComponent },

      //path non correspondant redirige vers le composant 
    {path: '', pathMatch: 'full', redirectTo: '/grammagiks'},


     //path null redirige vers lecomposant 
    {path: '**', component: NotFoundComponent},

    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
