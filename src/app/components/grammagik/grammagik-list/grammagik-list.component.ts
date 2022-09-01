import { Component, Input, OnInit } from '@angular/core';
import { GramMagik } from 'src/app/models/gram-magik';

@Component({
  selector: 'app-grammagik-list',
  templateUrl: './grammagik-list.component.html',
  styleUrls: ['./grammagik-list.component.css']
})
export class GrammagikListComponent implements OnInit {

  gramMagics : GramMagik[] = [
    {urlImg:'../assets/img/02-cocktail-cucumber-rose-soda.gif', titre:'Pétillance exigé', 
    profil:{nom: 'Larry', gramMagik: []}},
    
    {urlImg:'../assets/img/05-soupoudrage-cake.gif',titre:'Perlimpinpin saupoudrage de perlimpinpinexigé', 
    profil:{nom: 'Poter', gramMagik: []}},
  ];


  @Input()
  set filtre(valeur: string){
console.log('grammagiklistcomponent', valeur);

  }

  constructor() { }

  ngOnInit(): void {
  }

  

}
