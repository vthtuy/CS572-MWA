import { Component, Input, ViewEncapsulation } from '@angular/core';
import { resolve, reject } from 'q';

@Component({
  selector: 'app-root',
  template: ` 
    <p>hello</p>
    <h1>App Component</h1>
    <a [routerLink]="['/']">Home</a> | 
    <a [routerLink]="['users']">Users</a>
    
    <router-outlet></router-outlet>

    <p>App Component Bottom</p>
  `,
  styles: [],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
  title = 'Angular';
  result : number;

  
}
