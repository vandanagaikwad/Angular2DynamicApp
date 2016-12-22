import { Directive, Input, Output, OnInit, HostBinding, OnDestroy, EventEmitter } from '@angular/core';

@Directive({
  selector: '[dropdown]',
  exportAs: 'bs-dropdown'
})
export class DropdownDirective implements OnInit, OnDestroy {
  @HostBinding('class.open')
  @Input() public get isOpen():boolean { return;}
  @Input() public autoClose:string;
  @Input() public keyboardNav:boolean;
// enum string: ['nonInput', always', 'outsideClick', 'disabled']
  @Input() public appendToBody:boolean;
  @Output() public onToggle:EventEmitter<boolean>;
  
   ngOnInit(): void {

   }

   ngOnDestroy(): void {

   }
}