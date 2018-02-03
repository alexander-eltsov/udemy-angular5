import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() foreColor: string;
  @Input() backColor: string;

  @HostBinding('style.color') color: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.backColor);
    this.color = this.foreColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.color = 'black';
  }
}
