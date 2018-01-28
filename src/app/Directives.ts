import { Directive, ElementRef } from '@angular/core';
@Directive({ selector: '[Directives]'})
export class Directives{
  constructor(el:ElementRef){
    el.nativeElement.style.marginTop = '90px';
    el.nativeElement.style.fontSize = '12px';

  }
}
