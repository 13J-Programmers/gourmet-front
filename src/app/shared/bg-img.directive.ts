import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBgImg]'
})
export class BgImgDirective implements OnChanges {

  constructor(private el: ElementRef) { }

  @Input() src: string;

  ngOnChanges (changes: SimpleChanges) {
    if (changes.src.currentValue) {
      this.el.nativeElement.style.background = `url(${this.src}) center center / cover no-repeat`;
    }
  }

}
