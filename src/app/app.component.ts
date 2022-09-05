import { Component } from '@angular/core';
import { LoggerService } from './shared/services/logger/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'magikGram';
  subtitle = 'Poire don\'t cry';
  logoAppli= true;

  searchingValue = ''; // va recevoir lvaleur du témoin (goSearch)

  constructor(private _loggerService: LoggerService){

  }

  rechercherMagikgram(valeur: string){
  this._loggerService.log('LoggerServive valeur app components' , valeur)
   console.log('valeur app components' , valeur);
   this.searchingValue  = valeur 
   

  }

}
 