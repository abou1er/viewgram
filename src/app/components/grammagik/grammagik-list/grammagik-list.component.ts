import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GramMagik } from 'src/app/models/gram-magik';
import { GrammagikService } from 'src/app/shared/services/grammagik/grammagik.service';
import { LoggerService } from 'src/app/shared/services/logger/logger.service';

@Component({
  selector: 'app-grammagik-list',
  templateUrl: './grammagik-list.component.html',
  styleUrls: ['./grammagik-list.component.css']
})
export class GrammagikListComponent implements OnInit, OnDestroy {

  
  

  _lesSouscriptions: Subscription[] = [];

  constructor(private _loggerService: LoggerService, private _grammagikService: GrammagikService,){

  }

  gramMagics :  any;
  
  addGrammagic: any;


ngOnDestroy():void{
  this._lesSouscriptions.forEach(item => item.unsubscribe())
}



  @Input()
  set filtre(valeur: string){
console.log('grammagiklistcomponent', valeur);

  }

  ngOnInit(): void {
    // this.gramMagics = this._grammagikService.getAll();    // get classic
    // this._loggerService.log('this.gramMagics  ', this.gramMagics)

    const subscriptionEnCours = this._grammagikService.getAll_Observable().subscribe(unTableau => this.gramMagics = unTableau);
    this._lesSouscriptions.push(subscriptionEnCours);
    this._loggerService.log('this.gramMagics  ', this.gramMagics)


  }

  runAddGrammagic(): any{
    // this.addGrammagic = !this.addGrammagic;
    this.addGrammagic = new GramMagik();

    this._loggerService.log('this.addGrammagic  ', this.addGrammagic)
  }


  invisibleZoneAddGrammagic(){
    this.addGrammagic = null
  }
}



  // gramMagics : GramMagik[] = 
  
  // [
  //   {urlImg:'../assets/img/02-cocktail-cucumber-rose-soda.gif', titre:'Pétillance exigé', 
  //   profil:{nom: 'Larry', gramMagik: []}},
    
  //   {urlImg:'../assets/img/05-soupoudrage-cake.gif',titre:'Perlimpinpin saupoudrage de perlimpinpinexigé', 
  //   profil:{nom: 'Poter', gramMagik: []}},
  // ];image.png

