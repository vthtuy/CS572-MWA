import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective {

  size : number;

  @HostListener('dblclick') bar() {
    console.log(this.e.nativeElement.style.fontSize)
    this.size = this.size + 2;
    this.r.setStyle(this.e.nativeElement, 'font-size', this.size + 'px');
  }

  constructor(private e : ElementRef, private r : Renderer2) { 

  }

  ngOnInit() {
    this.size = parseInt(this.e.nativeElement.style.fontSize.substr(0, this.e.nativeElement.style.fontSize.length-2));
  }

}
