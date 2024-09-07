import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2, } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {
  @HostBinding('style.color') color :string | undefined;
  @Input() defulatColor:string="white";
  @Input() highlightColor:string="gray";


  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseover(eventData:Event){
    //this.rerender.setStyle(this.element.nativeElement,"background-color","gray")
    this.color=this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
   // this.rerender.setStyle(this.element.nativeElement,"background-color","white")
   this.color=this.defulatColor;
  }

}
