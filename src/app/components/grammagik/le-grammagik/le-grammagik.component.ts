import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger/logger.service';

@Component({
  selector: 'app-le-grammagik',
  templateUrl: './le-grammagik.component.html',
  styleUrls: ['./le-grammagik.component.css']
})
export class LeGrammagikComponent implements OnInit, OnDestroy {
  private  subscriptions: Subscription[] = [];

  constructor(private _route: ActivatedRoute, private _logger: LoggerService) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe())
  }

  ngOnInit(): void {
    //params va permettre de récupérer l'ensemble des valeurs paramètre par rapport à l'id
    const subscription= this._route.params.subscribe(data => { 
      const magikgramId = data['id'];
      //récupération de l'id
      
      // this._logger.log('LeGrammagikComponent', +magikgramId )
  
  });


  this.subscriptions.push(subscription);

}
}
