import { Component, OnInit } from '@angular/core';
import { GramMagik } from 'src/app/models/gram-magik';

@Component({
  selector: 'app-grammagik-list',
  templateUrl: './grammagik-list.component.html',
  styleUrls: ['./grammagik-list.component.css']
})
export class GrammagikListComponent implements OnInit {

  gramMagics : GramMagik[] = [
    {urlImg:'', profil:{nom: 'poire cry', gramMagik: []}},
    {urlImg:'', profil:{nom: 'poire cryING', gramMagik: []}},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  

}
