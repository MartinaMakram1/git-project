import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appDivStyle]'
})
export class DivStyleDirective implements OnChanges{

  @Input() property1:string="25px"
  @Input('appDivStyle') property2:string="0px"
  
  
  constructor(private elementRef:ElementRef) {
    // this.elementRef.nativeElement.style.boxShadow=`${this.property2}`
    
   }
    ngOnChanges(): void {
      this.elementRef.nativeElement.style.borderRadius=`${this.property2}`
    }
  
     @HostListener('mouseover')func1(){
      this.elementRef.nativeElement.style.borderRadius=`${this.property1}`
      this.elementRef.nativeElement.style.boxShadow="5px 5px 5px 5px rgb(190,176,176)"
     }
     @HostListener('mouseout')func2(){
      this.elementRef.nativeElement.style.borderRadius=`${this.property2}`
      this.elementRef.nativeElement.style.boxShadow="none"
  
     }

}
