import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GrammagikService } from 'src/app/shared/services/grammagik/grammagik.service';
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

  constructor(private _grammagikService : GrammagikService) { }
  ngOnInit(): void {
  }

  addGrammagic(){
    this._grammagikService.addGrammagik(this.infoGrammagic).subscribe(data => this.infoGrammagic = data);
  //todo informer le parent
  }


  cancelAddGrammagic(){
    this.cancelAddGrammagik.emit({}); //({}) si null ne retournera auvun élément
    console.log("this.cancelAddGrammagik.emit({})");
    
  }
}
  