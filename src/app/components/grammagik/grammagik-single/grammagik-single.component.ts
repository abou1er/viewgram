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
  cartesInfo: any
  oneCardInfo: any
  modalCardInfo: boolean =false
  produitInfo: any = {
   
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


  // urlSelfie: any;
  boolUrlSelfie= false;

  ngOnInit(): void {
    const subscriptionEnCours = this._grammagikService.getAll_Observable().subscribe(unTableau => this.gramMagiKs = unTableau);
    
    this._lesSouscriptions.push(subscriptionEnCours);

    this.gramMagicss = this._grammagikService.getAll_Observable().subscribe(unTableau => this.gramMagicss = unTableau);
    
  //   this._loggerService.log('this.gramMagics liste ',this.gramMagicss )
  //   console.log(
      
  //   );
    
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
//   this.produitInfo.urlSelfie= webcamImage.imageAsDataUrl,
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



}
