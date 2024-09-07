import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoveBackground]'
})
export class HoveBackgroundDirective {



  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor('gray'); // Set background to gray on hover
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('white'); // Revert to white when not hovering
  }

  private changeBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

}
