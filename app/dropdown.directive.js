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
var DropdownDirective = (function () {
    function DropdownDirective() {
    }
    Object.defineProperty(DropdownDirective.prototype, "isOpen", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    DropdownDirective.prototype.ngOnInit = function () {
    };
    DropdownDirective.prototype.ngOnDestroy = function () {
    };
    __decorate([
        core_1.HostBinding('class.open'),
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DropdownDirective.prototype, "isOpen", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DropdownDirective.prototype, "autoClose", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DropdownDirective.prototype, "keyboardNav", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DropdownDirective.prototype, "appendToBody", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DropdownDirective.prototype, "onToggle", void 0);
    DropdownDirective = __decorate([
        core_1.Directive({
            selector: '[dropdown]',
            exportAs: 'bs-dropdown'
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownDirective);
    return DropdownDirective;
}());
exports.DropdownDirective = DropdownDirective;
//# sourceMappingURL=dropdown.directive.js.map