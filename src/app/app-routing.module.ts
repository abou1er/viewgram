import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrammagikListComponent } from './components/grammagik/grammagik-list/grammagik-list.component';

const routes: Routes = [
  
    {path: '', pathMatch: 'full', redirectTo: '/grammagik'},
    {path: 'grammagik', component: GrammagikListComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
