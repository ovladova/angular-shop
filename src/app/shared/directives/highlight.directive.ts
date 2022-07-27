import {Directive, ElementRef, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @HostBinding('style.border') border: string = '';

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.border = "5px solid blue";
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('lightpink');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
