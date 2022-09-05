import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild('inputSearch', {static: false}) searchZone!: ElementRef; //récupère valeur de inputSearch et va stocker dans searchZone

  @Output()
  goSearch: EventEmitter<string> = new EventEmitter<string>() ;

  constructor() { }

  ngOnInit(): void {
  }


  rechercher(){
    console.log('menu.component', this.searchZone.nativeElement.value);
    
  const searchValue = this.searchZone.nativeElement.value;

  this.goSearch.emit(searchValue);

  }






}
