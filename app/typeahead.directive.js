"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// directive Typeahead
var TypeaheadDirective = (function () {
    function TypeaheadDirective() {
        this.typeaheadAsync = null;
        this.typeaheadLatinize = true;
        this.typeaheadSingleWords = true;
        this.typeaheadWordDelimiters = ' ';
        this.typeaheadPhraseDelimiters = '\'"';
    }
    TypeaheadDirective.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TypeaheadDirective.prototype, "typeaheadLoading", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TypeaheadDirective.prototype, "typeaheadNoResults", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TypeaheadDirective.prototype, "typeaheadOnSelect", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TypeaheadDirective.prototype, "typeahead", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TypeaheadDirective.prototype, "typeaheadMinLength", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TypeaheadDirective.prototype, "typeaheadWaitMs", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TypeaheadDirective.prototype, "typeaheadOptionsLimit", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TypeaheadDirective.prototype, "typeaheadOptionField", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TypeaheadDirective.prototype, "typeaheadGroupField", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TypeaheadDirective.prototype, "typeaheadAsync", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TypeaheadDirective.prototype, "typeaheadLatinize", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TypeaheadDirective.prototype, "typeaheadSingleWords", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TypeaheadDirective.prototype, "typeaheadWordDelimiters", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TypeaheadDirective.prototype, "typeaheadPhraseDelimiters", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TypeaheadDirective.prototype, "typeaheadAppendToBody", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TypeaheadDirective.prototype, "typeaheadEditable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TypeaheadDirective.prototype, "typeaheadFocusFirst", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TypeaheadDirective.prototype, "typeaheadInputFormatter", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TypeaheadDirective.prototype, "typeaheadSelectOnExact", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TypeaheadDirective.prototype, "typeaheadSelectOnBlur", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TypeaheadDirective.prototype, "typeaheadFocusOnSelect", void 0);
    TypeaheadDirective = __decorate([
        core_1.Directive({
            selector: '[typeahead][ngModel]'
        }), 
        __metadata('design:paramtypes', [])
    ], TypeaheadDirective);
    return TypeaheadDirective;
}());
exports.TypeaheadDirective = TypeaheadDirective;
//# sourceMappingURL=typeahead.directive.js.map