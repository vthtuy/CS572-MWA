import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, ViewEncapsulation } from '@angular/core';  

@Component({
  selector: 'app-counter',
  template: `
    <p>
      counter works on component : {{number}}
    </p>
    
    <button (click)="minus(txtNumber)" >-</button>
    <input  #txtNumber [value]="number" (input)="number">
    <button (click)="plus(txtNumber)" >+</button>
  `,
  styles: [`p {color: blue}`],
  encapsulation : ViewEncapsulation.ShadowDom
})
export class CounterComponent {
  private number : number;
  @Output() onMinus = new EventEmitter();
  @Output() onPlus = new EventEmitter();

  @ViewChild("txtNumber", {static: true}) txtNumberViewChild;

  constructor() {
    this.number = 10;
    this.onMinus = new EventEmitter();
  }
  
  minus(txtNumber){ 
    console.log(txtNumber.value);
    txtNumber.value--;
    this.number = txtNumber.value;
    this.onMinus.emit(txtNumber.value);
  }

  plus(txtNumber) {
    txtNumber.value++; 
    this.number = txtNumber.value;
    this.onPlus.emit(txtNumber.value);
  }

  ngOnInit() {

  }

}
