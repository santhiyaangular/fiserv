import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
@HostBinding('style.color')
  updateColor: string;
 @HostBinding('style.textDecoration')
 updateText: string;

  @HostListener('mouseover')
  highlightOnMouseOver(){
    this.updateColor = 'brown';
    this.updateText = 'underline';
  }
  @HostListener('mouseleave')
  highlightOnMouseLeave(){
    this.updateColor = 'black';
    this.updateText = '';
  }
  ngOnInit(){
    this.updateColor = 'black';
  }
}
