import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[HighlightKeywordDirective]'
})
export class HighlightKeywordDirective implements OnChanges {
  @Input() searchText: string | undefined;
  private originalText: string = '';

  constructor(private el: ElementRef<HTMLElement>) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchText'].firstChange) {
      this.originalText = this.el.nativeElement.innerText;
    }
    if (changes['searchText'].currentValue?.length){
      const keyWord: string = changes['searchText'].currentValue;
      const regExp = new RegExp(`(${keyWord})`,'gi');
      this.el.nativeElement.innerHTML = this.originalText.replace(regExp, `<mark>\$1</mark>`);
    } else {
      this.el.nativeElement.innerHTML = this.originalText
    }
  }

}
