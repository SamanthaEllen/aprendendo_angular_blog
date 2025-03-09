import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
 
 @Component({
   selector: 'app-big-card',
   imports: [
    RouterModule
   ],
   templateUrl: './big-card.component.html',
   styleUrls: ['./big-card.component.scss']
 })
 export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string =""
  @Input()
  cardTitle:string= ""
  @Input()
  cardDescription:string =""
  @Input()
  Id:string="0"
 
   constructor() { }
 
   ngOnInit(): void {
   }
 
 }