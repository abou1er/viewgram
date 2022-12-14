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

  produitInfo: any;

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


    // this.gramMagics = this._grammagikService.getAll_Observable().subscribe(unTableau => this.gramMagics = unTableau);
    
    // this._loggerService.log('this.gramMagics liste ',this.gramMagics )


  }

  runAddGrammagic(): any{
    // this.addGrammagic = !this.addGrammagic;
    this.addGrammagic = new GramMagik();
    this.addGrammagic.titre= "mamamia";
    this._loggerService.log('this.addGrammagic  ', this.addGrammagic)
  }


  invisibleZoneAddGrammagic(){
    this.addGrammagic = null
  }


  recupInfoo(g: any){ //p fera référence à l'objet qui sera récupéré en html dans ma boucle *ngFor //créer d'abord un objet vide qui contiendra p
    this.produitInfo = g;
    console.log(this.produitInfo)
  }


}

  //créer pour edit stock les info selectionné current model les conserves


function recupInfo(g: any, any: any) {
  throw new Error('Function not implemented.');
}
  // gramMagics : GramMagik[] = 
  
  // [
  //   {urlImg:'../assets/img/02-cocktail-cucumber-rose-soda.gif', titre:'Pétillance exigé', 
  //   profil:{nom: 'Larry', gramMagik: []}},
    
  //   {urlImg:'../assets/img/05-soupoudrage-cake.gif',titre:'Perlimpinpin saupoudrage de perlimpinpinexigé', 
  //   profil:{nom: 'Poter', gramMagik: []}},
  // ];image.png

