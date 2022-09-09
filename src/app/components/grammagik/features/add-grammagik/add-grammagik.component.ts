import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor() { }
  ngOnInit(): void {
  }

  addGrammagic(){}


  cancelAddGrammagic(){
    this.cancelAddGrammagik.emit({}); //({}) si null ne retournera auvun élément
    console.log("this.cancelAddGrammagik.emit({})");
    
  }
}
  