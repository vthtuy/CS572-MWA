import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
    <p>
      counter works on Main : {{result}}
    </p>
    Counter number 1: <app-counter (onMinus)="showResult($event)" (onPlus)="showResult($event)"></app-counter>
    <p></p>
    Counter number 2: <app-counter (onMinus)="showResult($event)" (onPlus)="showResult($event)"></app-counter>
    <p></p>
    Counter number 3: <app-counter (onMinus)="showResult($event)" (onPlus)="showResult($event)"></app-counter>
  `,
  styles: [`p {color: red}`, ],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
  title = 'Angular Counter App';
  result : number;
  showResult(txtNumber) {
    console.log('main', txtNumber);
    this.result = txtNumber;
  }
}
