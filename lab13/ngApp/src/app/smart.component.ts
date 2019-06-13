import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <p>
      smart works!
    </p>
    <app-dumb [data]="data" ></app-dumb>
   
  `,
  styles: []
})
export class SmartComponent implements OnInit {

  data : any[];

  constructor() { 
    this.data = [
      {id: 1, firstname : "Micheal",  lastname: "McWell", course : "CS572"},
      {id: 2, firstname : "Micheal",  lastname: "McWell", course : "CS544"},
      {id: 3, firstname : "Herry",  lastname: "Frank", course : "CS400"}
    ]
  }

  ngOnInit() {
  }

}
