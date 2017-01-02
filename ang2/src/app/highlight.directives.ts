import {Directive, Input, Renderer, ElementRef} from "@angular/core";

@Directive({
  selector:"[myHighlight]"
})
export class HighlightDirective{
  constructor(el:ElementRef, renderer:Renderer){
    // директива присваивает элементу, с которым используется, определенный стиль
    //вписывается в DOM элемент как аттрибут
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'blue');
  }
}
