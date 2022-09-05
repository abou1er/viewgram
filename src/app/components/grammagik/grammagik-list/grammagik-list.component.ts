import { Component, Input, OnInit } from '@angular/core';
import { GramMagik } from 'src/app/models/gram-magik';
import { GrammagikService } from 'src/app/shared/services/grammagik/grammagik.service';
import { LoggerService } from 'src/app/shared/services/logger/logger.service';

@Component({
  selector: 'app-grammagik-list',
  templateUrl: './grammagik-list.component.html',
  styleUrls: ['./grammagik-list.component.css']
})
export class GrammagikListComponent implements OnInit {

  constructor(private _loggerService: LoggerService, private _grammagikService: GrammagikService){

  }

  gramMagics :  any;
  // gramMagics : GramMagik[] = 
  
  // [
  //   {urlImg:'../assets/img/02-cocktail-cucumber-rose-soda.gif', titre:'Pétillance exigé', 
  //   profil:{nom: 'Larry', gramMagik: []}},
    
  //   {urlImg:'../assets/img/05-soupoudrage-cake.gif',titre:'Perlimpinpin saupoudrage de perlimpinpinexigé', 
  //   profil:{nom: 'Poter', gramMagik: []}},
  // ];


  @Input()
  set filtre(valeur: string){
console.log('grammagiklistcomponent', valeur);

  }

  ngOnInit(): void {
    this.gramMagics = this._grammagikService.getAll();
    this._loggerService.log('this.gramMagics  ', this.gramMagics)
  }

  

}
