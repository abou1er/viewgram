import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, map, Observable, of } from 'rxjs';
import { GramMagik } from 'src/app/models/gram-magik';
import { Profil } from 'src/app/models/profil';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GrammagikService {

  constructor(private _httpClient: HttpClient) { }
   gramMagic = new GramMagik();

   theyAllGramMagics : any = this.getAll_Observable();


  getAll(){
    /**
     * Retourne la liste complète des gramMagik
     */

    const allGramMagics : GramMagik[] = []
  
    
      let gramMagic = new GramMagik();
      gramMagic.urlImg = '../assets/img/02-cocktail-cucumber-rose-soda.gif';
      gramMagic.titre = 'Pétillance exigé';

      gramMagic.profil = new Profil();
      gramMagic.profil.nom = 'Larry';

      allGramMagics.push(gramMagic)

 
    
  // 2eme facon de faire
  // allGramMagics.push({
  //   urlImg:'../assets/img/05-soupoudrage-cake.gif',
  //   titre:'Perlimpinpin saupoudrage de perlimpinpinexigé',
  //   profil:{nom: 'Poter', gramMagik: []}
  // },
  // {
  //   urlImg:'../assets/img/02-cocktail-cucumber-rose-soda.gif',
  //   titre:'Pétillance exigé',
  //   profil:{nom: 'Larry', gramMagik: []}
  // })


  return allGramMagics;  // peut importe la facon ne pas oublier de return
}

/***
 * retourne lobservable pour s'inscrire à la réception des données
 * // rend les données observable. Renvoi le tableau de mes données
 */

getAll_Observable(): Observable<GramMagik[]>{
  // const monTableau = this.getAll();
  //return of(monTableau)  // ligne OK 

                        // en dessous test avec interval + map
                        /****interval map */
  // return interval(1000).pipe( //interval return un entier
  // map(entier=>[             //à chaque fois que mon entier et envoyé va permettre d'envoyer mon tableau avec
  //   {
  //     urlImg:'../assets/img/05-soupoudrage-cake.gif',
  //   titre: entier + ' Perlimpinpin saupoudrage de perlimpinpinexigé',
  //   profil:{nom: 'Poter', gramMagik: []
  //   }
  // },
  // {
  //   urlImg:'../assets/img/02-cocktail-cucumber-rose-soda.gif',
  //   titre:'Pétillance exigé',
  //   profil:{nom: 'Larry', gramMagik: []}
  // }
  // ])
  // );
  /**********************fin interval map */

  /**  httClient get de ma bdd mock url*/     //environement ne pas prendre le .prod
return this._httpClient.get<GramMagik[]>(environment.apis.grammagik.url); // get de mes objet contenue dans l'url de mon mock
}


/**
 * 
 * ajout du magikgram : envoie données en json vers l'api mock et récupère le magikgram ajouté
 * 
 */
addGrammagik(grammagic: GramMagik): Observable<GramMagik> {
  return this._httpClient.post<GramMagik>(environment.apis.grammagik.url, grammagic);
}


//retourne le magikgram current
getOne(id: number): Observable<GramMagik> {
return this._httpClient.get<GramMagik>(environment.apis.grammagik.url+ '/' +id);

}

update(v:any): Observable<GramMagik> {
  return this._httpClient.patch<GramMagik>(environment.apis.grammagik.url+ '/' +v.id,v);
  }


  updateSelf(objet:any){
    return this._httpClient.patch(environment.apis.grammagik.url+ '/' +objet.id,objet);
  
  }
  
  deleteSelf(id:any){
    return this._httpClient.delete(environment.apis.grammagik.url+ '/' +id);
  }

  getByIdService(gramId: number):any{
    const magikSingleOne = this.theyAllGramMagics.find((magikSingleOne: any) => magikSingleOne.id === gramId)
  
    if (!magikSingleOne){
      throw new Error("Aucune magikSingleOne correspondant à cette id!");
      
  }else{
      return magikSingleOne   
  }
  }
  
//   getPickById(gramId: number): GramMagik {
//    return this._httpClient.find(grammagik => grammagik.id === gramId);

//     if (!pick){
//         throw new Error("Aucune pick correspondant à cette id!");
        
//     }else{
//         return pick   
//     }
//  } 

//  getLikePickById(myPickId: number, likeType: 'like' | 'unlike'): void {
//     const pick = this.getPickById(myPickId); //utilise la methode getbyid
//     likeType === 'like' ? pick.like++ : pick.like--;  //va ajoute +1 ou -1
//  }                                                    //likeType: 'like' | 'unlike'
//                                                      //likeType === 'like' ? pick.like++ : pick.like--;
    }

