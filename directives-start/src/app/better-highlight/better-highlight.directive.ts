import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) { }

    ngOnInit(): void {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    }

}