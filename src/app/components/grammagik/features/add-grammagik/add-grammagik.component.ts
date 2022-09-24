import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GrammagikService } from 'src/app/shared/services/grammagik/grammagik.service';

import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-add-grammagik',
  templateUrl: './add-grammagik.component.html',
  styleUrls: ['./add-grammagik.component.css']
})
export class AddGrammagikComponent implements OnInit {
  @Output()
  public cancelAddGrammagik: EventEmitter<any> = new EventEmitter<any>(); //va émmetre l'info vers grammagik-list

@Input()
infoGrammagic : any;

testUrl!: string
  constructor(private _grammagikService : GrammagikService) { }
  ngOnInit(): void {
    this.addSelfie()
   
  }

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






  public triggerSnapshot(): void {
    this.trigger.next();
  }


  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }


//récupère le selfie qui a été pris
  public handleImage(webcamImage: WebcamImage): void {
    // console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;

    console.log('this.webcamImage', this.webcamImage);
    
  }


  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }


  
}
  