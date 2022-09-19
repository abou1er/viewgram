import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GramMagik } from 'src/app/models/gram-magik';
import { GrammagikService } from 'src/app/shared/services/grammagik/grammagik.service';
import { LoggerService } from 'src/app/shared/services/logger/logger.service';


@Component({
  selector: 'app-grammagik-single',
  templateUrl: './grammagik-single.component.html',
  styleUrls: ['./grammagik-single.component.css']
})
export class GrammagikSingleComponent implements OnInit {

  
  @Input()  //déclaration dans enfant pour que parent récupère

 
  public grammagikSingle!: GramMagik  //déclaration dans enfant pour que parent récupère

  constructor(private _loggerService: LoggerService, private _grammagikService: GrammagikService,private _router: Router) { }

  gramMagicss :  any;

  ngOnInit(): void {
  //   this.gramMagicss = this._grammagikService.getAll_Observable().subscribe(unTableau => this.gramMagicss = unTableau);
    
  //   this._loggerService.log('this.gramMagics liste ',this.gramMagicss )
  //   console.log(
      
  //   );
    
  }

  clashNav(){
    this._router.navigate(['clash/nouveau']);
  }

  consultMagikgram(){
    // this._router.navigate(['/le-grammagik']);
    this._router.navigate(['/le-grammagik', this.grammagikSingle.id]);
    console.log("{grammagikSingle.id", this.grammagikSingle.id);
    
  }

}
