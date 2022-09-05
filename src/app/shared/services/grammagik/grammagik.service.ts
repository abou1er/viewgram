import { Injectable } from '@angular/core';
import { GramMagik } from 'src/app/models/gram-magik';
import { Profil } from 'src/app/models/profil';

@Injectable({
  providedIn: 'root'
})
export class GrammagikService {

  constructor() { }

  getAll(){
    const allGramMagics : GramMagik[] = []
  
    
      let gramMagic = new GramMagik();
      gramMagic.urlImg = '../assets/img/02-cocktail-cucumber-rose-soda.gif';
      gramMagic.titre = 'Pétillance exigé';

      gramMagic.profil = new Profil();
      gramMagic.profil.nom = 'Larry';

      allGramMagics.push(gramMagic)

 

  // 2eme facon de faire
  allGramMagics.push({
    urlImg:'../assets/img/05-soupoudrage-cake.gif',
    titre:'Perlimpinpin saupoudrage de perlimpinpinexigé',
    profil:{nom: 'Poter', gramMagik: []}
  },
  {
    urlImg:'../assets/img/05-soupoudrage-cake.gif',
    titre:'Perlimpinpin saupoudrage de perlimpinpinexigé',
    profil:{nom: 'Poter', gramMagik: []}
  })


  return allGramMagics;  // peut importe la facon ne pas oublier de return


}

}