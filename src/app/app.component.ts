import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'magikGram';
  subtitle = 'Poire don\'t cry';
  logoAppli= true;
  searchingValue = '';


  rechercherMagikgram(valeur: string){
   console.log('valeur app components' , valeur);
   this.searchingValue  = valeur
   

  }

}
