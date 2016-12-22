import { Directive, Input, Output, OnInit, HostBinding, OnDestroy, EventEmitter } from '@angular/core';
import { TypeaheadMatch } from './../node_modules/ng2-bootstrap/components/typeahead/typeahead-match.class';

// directive Typeahead
@Directive({
  selector: '[typeahead][ngModel]'
})
export class TypeaheadDirective implements OnInit {
  @Output() public typeaheadLoading:EventEmitter<boolean>;
  @Output() public typeaheadNoResults:EventEmitter<boolean>;
  @Output() public typeaheadOnSelect:EventEmitter<TypeaheadMatch>;

  @Input() public typeahead:any;
  @Input() public typeaheadMinLength:number;
  @Input() public typeaheadWaitMs:number;
  @Input() public typeaheadOptionsLimit:number;
  @Input() public typeaheadOptionField:string;
  @Input() public typeaheadGroupField:string;
  @Input() public typeaheadAsync:boolean = null;
  @Input() public typeaheadLatinize:boolean = true;
  @Input() public typeaheadSingleWords:boolean = true;
  @Input() public typeaheadWordDelimiters:string = ' ';
  @Input() public typeaheadPhraseDelimiters:string = '\'"';
  //@Input() public typeaheadItemTemplate:TemplateRef<any>;

  // not yet implemented
  @Input() private typeaheadAppendToBody:boolean;
  @Input() private typeaheadEditable:boolean;
  @Input() private typeaheadFocusFirst:boolean;
  @Input() private typeaheadInputFormatter:any;
  @Input() private typeaheadSelectOnExact:boolean;
  @Input() private typeaheadSelectOnBlur:boolean;
  @Input() private typeaheadFocusOnSelect:boolean;

  ngOnInit(): void {

  }
}