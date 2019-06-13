import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
    <p>
      dumb works!
    </p>
    <table>
      <tr>
        <td>Id</td><td>Name</td><td>Course</td> 
      <tr>

        <tr *ngFor="let item of data">
          <td>{{item.id}}</td><td>{{item.firstname}} {{item.lastname}}</td><td>{{item.course}}</td> 
        <tr>
      
    <table>
  `,
  styles: []
})
export class DumbComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
