import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GramMagik } from 'src/app/models/gram-magik';
import { GrammagikService } from 'src/app/shared/services/grammagik/grammagik.service';
import { LoggerService } from 'src/app/shared/services/logger/logger.service';
import { GrammagikListComponent } from '../grammagik-list/grammagik-list.component';

import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { Observable, Subject, Subscription } from 'rxjs';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-grammagik-single',
  templateUrl: './grammagik-single.component.html',
  styleUrls: ['./grammagik-single.component.css']
})
export class GrammagikSingleComponent implements OnInit {
  @Output()
  public cancelAddGrammagik: EventEmitter<any> = new EventEmitter<any>(); //va émmetre l'info vers grammagik-list

  
  @Input()  //déclaration dans enfant pour que parent récupère
  public grammagikSingle!: GramMagik  //déclaration dans enfant pour que parent récupère
  public indx!:number;
  infoGrammagic : any;








  constructor(public gramListComponent: GrammagikListComponent,private _loggerService: LoggerService, private _grammagikService: GrammagikService,private _router: Router) { }
  _lesSouscriptions: Subscription[] = [];
  gramMagiKs :  any;
  gramMagicss :  any;
  @Output()
  cartesInfo: any;
  // oneCardInfo: any;
  // oneCardInfologoHeart =false
  forTrue: boolean = false;

  oneCardInfo: any = {
    id: "",
    imageAs64: "",
    urlImg: "",
    titre: "",
    urlSelfie:"",
    logoHeart: false,
    logoFire: false,
    like: Number,
    txtBtnHeart: 'Kool' ,
  }


  modalCardInfo: boolean =false;

  like!: number;
  txtBtnFire!:string;
  txtBtnHeart!: string;
  produitInfo: any = {
   
    id: "",
    imageAs64: "",
    urlImg: "",
    titre: "",
    urlSelfie:"",
    logoHeart: false,
   

    // Profil={
    //     nom: "",
    //     grammagik: "",
    // }
  }

  carteAmodif: any= {
   
    id: "",
    imageAs64: "",
    urlImg: "",
    titre: "",
    urlSelfie:"",
   

    // Profil={
    //     nom: "",
    //     grammagik: "",
    // }
  }

  logoFire: boolean= false;
  logoHeart: boolean= false;
  // urlSelfie: any;
  boolUrlSelfie= false;

  ngOnInit(): void {
   this.getAllCards()
  // this.like = 7;
  // this.txtBtnFire= ' ça m\'enflamme';
  // this.txtBtnHeart= 'Arrêt du coeur'
  
  
    
  }
 
  getAllCards(){
    const subscriptionEnCours = this._grammagikService.getAll_Observable().subscribe(unTableau => this.gramMagiKs = unTableau);
    
    this._lesSouscriptions.push(subscriptionEnCours);

    this.gramMagicss = this._grammagikService.getAll_Observable().subscribe(unTableau => this.gramMagicss = unTableau);
    
  //   this._loggerService.log('this.gramMagics liste ',this.gramMagicss )
  //   console.log(
      
  //   );
  };


  onAddLike3(){
    // if (this.txtBtnHeart=== 'Arrêt du coeur'){
      if (this.logoHeart == false){
      // this._grammagikService.update(this.gramMagicss)
      this.logoHeart = !this.logoHeart
      this.like++;
      this.txtBtnHeart= ' Fait battre mon coeur'
    }else{
      this.logoHeart = !this.logoHeart
      this.like--;
      this.txtBtnHeart= 'Arrêt du coeur'
    }
    
    
  }

  // updateCC(gram: { like: boolean; id: any; }){
    updateCC(gram: any, id :any){
      id= gram.id
      // good add
    // gram.like   = gram.like+ 1;

    // console.log('!!gram.logoHeart  ',gram.logoHeart);
    // gram.logoHeart = !gram.logoHeart
    // console.log('gram.logoHeart  ',gram.logoHeart);
    // fin good add
 if (gram.logoHeart = gram.logoHeart){
      // this._grammagikService.update(this.gramMagicss)
      console.log('txtBtnHeart', gram.txtBtnHeart);
      
      gram.logoHeart = !gram.logoHeart
      gram.like--;
      console.log('dans le if');
      
      // this.txtBtnHeart= ' Fait battre mon coeur'
    }else{
      gram.logoHeart = !gram.logoHeart
      gram.like++;
      console.log('dans le else');
      // this.txtBtnHeart= 'Arrêt du coeur'
    }

  }

  updateFire(gram: any, id :any){
    id= gram.id
    // good add
  // gram.like   = gram.like+ 1;

  // console.log('!!gram.logoHeart  ',gram.logoHeart);
  // gram.logoHeart = !gram.logoHeart
  // console.log('gram.logoHeart  ',gram.logoHeart);
  // fin good add
if (gram.logoFire = gram.logoFire){
    // this._grammagikService.update(this.gramMagicss)
    console.log('txtBtnHeart', gram.txtBtnHeart);
    
    gram.logoFire = !gram.logoFire
    
    console.log('dans le if');
    
    // this.txtBtnHeart= ' Fait battre mon coeur'
  }else{
    gram.logoFire = !gram.logoFire
   
    console.log('dans le else');
    // this.txtBtnHeart= 'Arrêt du coeur'
  }

}



  onAddLike(gram: any, id : number){
    
    this.oneCardInfo = gram;
    this.forTrue = !this.forTrue
    // if (this.txtBtnHeart=== 'Arrêt du coeur'){
      this.oneCardInfo.logoHeart = gram.logoHeart
      this.oneCardInfo.like = gram.like
      if (this.oneCardInfo.logoHeart == this.logoHeart){
      // this._grammagikService.update(this.gramMagicss)
      this.oneCardInfo.logoHeart = !this.logoHeart;
      this.oneCardInfo.like  =++ this.oneCardInfo.like;
      // this.txtBtnHeart= ' Fait battre mon coeur'
    }else{
      // this.oneCardInfo.logoHeart = this.logoHeart
      // this.oneCardInfo.like--;
      // this.txtBtnHeart= 'Arrêt du coeur'
    }

    console.log(' INFOLIKE gram', gram);
    console.log('this.oneCardInfo.logoHeart  ', this.oneCardInfo.logoHeart);
    
  }

  infoLike(gram: any){
    this.oneCardInfo = gram;
    //  if (this.logoHeart == false){
    //   // this._grammagikService.update(this.gramMagicss)
    //   this.oneCardInfo.logoHeart = !this.logoHeart
    //   this.like++;
    //   this.txtBtnHeart= ' Fait battre mon coeur'
    // }else{
    //   this.oneCardInfo.logoHeart = !this.logoHeart;
    //   this.like--;
    //   this.txtBtnHeart= 'Arrêt du coeur'
    // }

    console.log(' INFOLIKE gram', gram);
    
  }




  onFire(){
    this.logoFire = !this.logoFire
  }

  clashNav(){
    this._router.navigate(['clash/nouveau']);
  }

  consultMagikgram(){
    // this._router.navigate(['/le-grammagik']);
    this._router.navigate(['/le-grammagik', this.grammagikSingle.id]);
    console.log("{grammagikSingle.id", this.grammagikSingle.id);

    // this.recupInfoo(g: any){};
    
  }

  recupInfoo(g: any){ //p fera référence à l'objet qui sera récupéré en html dans ma boucle *ngFor //créer d'abord un objet vide qui contiendra p
    this.produitInfo = g;
    console.log("recupInfoo this.produitInfo singlecomponent", this.produitInfo)
    this.grammagikSingle.id = this.produitInfo.id
    this.grammagikSingle.urlSelfie = this.produitInfo.urlSelfie
    console.log("recupInfoo this.grammagikSingle.id ",  this.grammagikSingle.id);
    console.log("recupInfoo this.grammagikSingle.urlSelfie ",  this.grammagikSingle.urlSelfie);
    
  }


  infoCard(gram: any){ //p fera référence à l'objet qui sera récupéré en html dans ma boucle *ngFor //créer d'abord un objet vide qui contiendra p
    this.modalCardInfo= true;
    this.oneCardInfo = gram;
    
    console.log("infoCard() oneCardInfo singlecomponent", this.oneCardInfo)
    
  }

 

  infoLike2(gram: any){
    this.oneCardInfo = gram;
    this.oneCardInfo.logoHeart = !this.logoHeart
    // if (gram.txtBtnHeart=== 'Arrêt du coeur'){
    //   // this._grammagikService.update(this.gramMagicss)
    //   this.oneCardInfo.logoHeart = !this.logoHeart
    //   this.oneCardInfo.like++;
    //   gram.txtBtnHeart= ' Fait battre mon coeur';
    // }else{
    //   this.oneCardInfo.logoHeart = false;
    //   this.oneCardInfo.like--;
    //   gram.txtBtnHeart= 'Arrêt du coeur'
    // }

    console.log('gram.logoHeart', gram.logoHeart);
    
  }




  @Output() emitter:EventEmitter<string>
  = new EventEmitter<any>();

  emit(keyword: string | undefined){
  this.emitter.emit(keyword);
  }






// add selfie

addGrammagic(){
  this._grammagikService.addGrammagik(this.infoGrammagic).subscribe(data => this.infoGrammagic = data);
//todo informer le parent
}


cancelAddGrammagic(){
  this.cancelAddGrammagik.emit({}); //({}) si null ne retournera auvun élément
  console.log("this.cancelAddGrammagik.emit({})");
  
}


addSelfie(){
  WebcamUtil.getAvailableVideoInputs()
  .then((mediaDevices: MediaDeviceInfo[]) => {
    // this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
  });
}

public deviceId: string | any;
public videoOptions: MediaTrackConstraints = {
  // width: {ideal: 1024},
  // height: {ideal: 576}
};
public errors: WebcamInitError[] = [];

// latest snapshot
public webcamImage!: WebcamImage;


// webcam snapshot trigger
private trigger: Subject<void> = new Subject<void>();






public triggerSnapshot() {
  // let qqch :any;
  this.trigger.next();
  // qqch = i
}


public handleInitError(error: WebcamInitError): void {
  this.errors.push(error);
}


//récupère le selfie qui a été pris
public handleImage(webcamImage: WebcamImage): void {
 
  
  // console.info('received webcam image', webcamImage);
  this.webcamImage = webcamImage;

  console.log('this.webcamImage', this.webcamImage);
// console.log("this.produitInfo.titre ", this.produitInfo.titre);

//   // this.grammagikSingle.id= 8,
//   this.grammagikSingle.urlImg= this.produitInfo.urlImg,
//   this.grammagikSingle.titre= "this.produitInfo.titre",
//   this.produitInfo.urlSelfie
//   // this.grammagikSingle.urlSelfie= this.produitInfo.urlSelfie,


//   // test sans method service patch
  this.oneCardInfo.urlSelfie= webcamImage.imageAsDataUrl;
//   this.grammagikSingle.urlSelfie= this.produitInfo.urlSelfie,
//   console.log("handleImage", this.grammagikSingle.urlSelfie);

//   // this.grammagikSingle.id = this.produitInfo.id
//   //   this.grammagikSingle.urlSelfie = this.produitInfo.urlSelfie
 
//   // test avec method service patch
//   // this.vUpdate()
//   console.log("handleImage", this.grammagikSingle);
  
  
  
}


public get triggerObservable(): Observable<void> {
  return this.trigger.asObservable();
}



vUpdate(){
  this._grammagikService.update(this.oneCardInfo).subscribe(() => {
    // this.detailRecup = data

    this.carteAmodif.urlSelfie= this.webcamImage.imageAsDataUrl
    console.log("update effectué ??");
    
  })  }



  getByIdTs(currentId: number){
    const pick = this.gramMagicss.find((gramMagicss: { id: number; }) => gramMagicss.id === currentId);

    if (!pick){
        throw new Error("Aucune pick correspondant à cette id!");
        
    }else{
        return pick   
    }
  }

}
