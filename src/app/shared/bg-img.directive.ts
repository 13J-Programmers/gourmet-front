import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appBgImg]'
})
export class BgImgDirective {

  constructor(private el: ElementRef) { }

  @Input() src: string;

  ngOnChanges (changes: any) {
    if (changes.path.currentValue) {
      this.el.nativeElement.style.background = `url(${this.src}) center center / cover no-repeat`;
    }
  }

}
