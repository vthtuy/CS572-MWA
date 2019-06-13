import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})

export class IsVisibleDirective {

  @Input('isVisible') isVisible : boolean;

  constructor(private e : ElementRef, private r : Renderer2) {
    console.log(e);
    
  }

  ngOnInit() {
    // data is boolean type when using [isVisible]=true, without squarebrace type is string
    console.log(typeof this.isVisible);

    this.r.setStyle(this.e.nativeElement, 'font-size', '22px')
    if (this.isVisible) {  
      this.r.setStyle(this.e.nativeElement, 'display', 'block')
    } else { 
      this.r.setStyle(this.e.nativeElement, 'display', 'none')
    }
  }

}
