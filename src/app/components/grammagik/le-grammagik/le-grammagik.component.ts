import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription} from 'rxjs';
// import { Subscription, switchMap } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { GramMagik } from 'src/app/models/gram-magik';
import { GrammagikService } from 'src/app/shared/services/grammagik/grammagik.service';
import { LoggerService } from 'src/app/shared/services/logger/logger.service';

@Component({
  selector: 'app-le-grammagik',
  templateUrl: './le-grammagik.component.html',
  styleUrls: ['./le-grammagik.component.css']
})
export class LeGrammagikComponent implements OnInit, OnDestroy {
  private  subscriptions: Subscription[] = [];

  @Input()
  public _leMagikgram!: GramMagik ;
  items = [];
  item: any;
  data: any = this._leMagikgram;
  constructor(private _route: ActivatedRoute, private _logger: LoggerService, private _grammagikService: GrammagikService) { }

/**/ 
@Input() keyword!:any;
  
/**/ 
  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe())
  }

  ngOnInit(): void {
    //params va permettre de récupérer l'ensemble des valeurs paramètre par rapport à l'id
   
    //***** 1ere facon de récup
  //   const subscription= this._route.params.subscribe(idNumber => { 
  //     const magikgramId = idNumber['id'];
  //     //récupération de l'id
      
  //     // this._logger.log('LeGrammagikComponent', +magikgramId )
  //     this._grammagikService.getOne(magikgramId).subscribe((dataSingle: any) => this._leMagikgram = dataSingle);    
  // });
  //***** fin 1ere facon/

  const subscription= this._route.params.pipe(
    
    switchMap(idNumber => { 
      const magikgramId = idNumber['id'];
      //récupération de l'id
      
      // this._logger.log('LeGrammagikComponent', +magikgramId )
      return this._grammagikService.getOne(magikgramId);    
  })
    
).subscribe(currentItem => this._leMagikgram = currentItem);

  this.subscriptions.push(subscription);

}



// refresh(){
//   this.items = [];
//   this.data.forEach(
//     (    item: { titre: any; urlImg: any; id: any; }) => {
//       if(item.titre.search(this.keyword) != -1
//        || item.urlImg.search(this.keyword) != -1 
//        || item.id.search(this.keyword) != -1) {
//         this.items.push(item)
//       }
//     }
//   ) 
// }


}

// const box = document.getElementById('box') as HTMLDivElement | null;
// console.log(box?.innerHTML); // 👉️ "hello world"


// }
