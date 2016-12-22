import { Directive, Input, Output, OnInit, HostBinding, HostListener, OnDestroy } from '@angular/core';

@Directive({ 
  selector: '[dropdownToggle]',
  exportAs: 'bs-dropdown-toggle'
})
export class DropdownToggle implements OnInit {
  @HostBinding('class.disabled')
  @Input() public isDisabled:boolean = false;

  @HostBinding('class.dropdown-toggle')
  @Input() public addToggleClass:boolean = false;

  @HostBinding('attr.aria-expanded')
  public get isOpen() {return;}
  @HostListener('click', ['$event'])
  public toggleDropdown(event:MouseEvent) {}

   ngOnInit(): void {}
   ngOnDestroy(): void {}
}