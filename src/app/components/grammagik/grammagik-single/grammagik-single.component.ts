import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GramMagik } from 'src/app/models/gram-magik';
import { GrammagikService } from 'src/app/shared/services/grammagik/grammagik.service';
import { LoggerService } from 'src/app/shared/services/logger/logger.service';
import { GrammagikListComponent } from '../grammagik-list/grammagik-list.component';

import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

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

  gramMagicss :  any;
  @Output()
  produitInfo: any;
  // urlSelfie: any;
  boolUrlSelfie= false;

  ngOnInit(): void {
    
  //   this.gramMagicss = this._grammagikService.getAll_Observable().subscribe(unTableau => this.gramMagicss = unTableau);
    
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
    console.log("this.produitInfo singlecomponent", this.produitInfo)
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






public triggerSnapshot(i: any): void {
  let qqch :any;
  this.trigger.next();
  qqch = i
}


public handleInitError(error: WebcamInitError): void {
  this.errors.push(error);
}


//récupère le selfie qui a été pris
public handleImage(webcamImage: WebcamImage): void {
  // console.info('received webcam image', webcamImage);
  this.webcamImage = webcamImage;

  console.log('this.webcamImage', this.webcamImage);
  this.grammagikSingle.urlSelfie= webcamImage.imageAsDataUrl
  
  this.boolUrlSelfie= true;
  
}


public get triggerObservable(): Observable<void> {
  return this.trigger.asObservable();
}


}
