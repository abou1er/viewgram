import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { 
    this.log('appel du LoggerService:<<new test Singleton>>');
  }



  log(message:string, obj?:unknown){
    if(!environment.production)
      console.log(message, obj);
      
  };
}
