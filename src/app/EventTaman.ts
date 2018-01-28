import {Directive, Input} from '@angular/core';
@Directive({
  selector: '[EventTaman]',
  host:{
    '(click)':'apretar()'
  }
})
export class EventTaman{
  @Input() evento: string;
  apretar(){

    if (this.evento=="+"){
      var tarjeta = document.getElementById("tarjeta");
      var taman = tarjeta.offsetWidth;
      tarjeta.style.width = taman+"px";
    }else {
      var tarjeta = document.getElementById("tarjeta");
      var taman = tarjeta.offsetWidth-32;
      tarjeta.style.width = taman+"px";
    }
  }
}
