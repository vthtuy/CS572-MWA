import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
  <p>Smart - Dumb</p>
    <app-smart></app-smart> 
    <p>Visible Directive</p>
    <div appIsVisible [isVisible]=true>I am smart component</div>
    <div appIsVisible [isVisible]=false>I am smart inside</div>

    <p> Make Bigger by double click</p>
    <div [ngStyle]="{'font-size': '10px', 'color' : 'green'}" appMakeBigger >Double Click on me - Hello Big World</div>

    {{title | multi:9}}
  `,
  styles: [`p {color: blue}`, ],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
  title = 'Angular';
  result : number;
  showResult(txtNumber) {
    console.log('main', txtNumber);
    this.result = txtNumber;
  }
}
