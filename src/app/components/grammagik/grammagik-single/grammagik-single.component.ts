import { Component, Input, OnInit } from '@angular/core';
import { GramMagik } from 'src/app/models/gram-magik';

@Component({
  selector: 'app-grammagik-single',
  templateUrl: './grammagik-single.component.html',
  styleUrls: ['./grammagik-single.component.css']
})
export class GrammagikSingleComponent implements OnInit {

  
  @Input()  //déclaration dans enfant pour que parent récupère


 
  public grammagikSingle!: GramMagik  //déclaration dans enfant pour que parent récupère

  constructor() { }

  ngOnInit(): void {
  }

}
