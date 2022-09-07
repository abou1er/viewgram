import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-grammagik',
  templateUrl: './add-grammagik.component.html',
  styleUrls: ['./add-grammagik.component.css']
})
export class AddGrammagikComponent implements OnInit {
  @Output()
  public cancelAddGrammagik: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  cancelAddGrammagic(){
    this.cancelAddGrammagik.emit({});
    console.log("this.cancelAddGrammagik.emit({})");
    
  }
}
  