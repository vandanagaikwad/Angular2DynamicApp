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
var DropdownToggle = (function () {
    function DropdownToggle() {
        this.isDisabled = false;
        this.addToggleClass = false;
    }
    Object.defineProperty(DropdownToggle.prototype, "isOpen", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    DropdownToggle.prototype.toggleDropdown = function (event) { };
    DropdownToggle.prototype.ngOnInit = function () { };
    DropdownToggle.prototype.ngOnDestroy = function () { };
    __decorate([
        core_1.HostBinding('class.disabled'),
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DropdownToggle.prototype, "isDisabled", void 0);
    __decorate([
        core_1.HostBinding('class.dropdown-toggle'),
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DropdownToggle.prototype, "addToggleClass", void 0);
    __decorate([
        core_1.HostBinding('attr.aria-expanded'), 
        __metadata('design:type', Object)
    ], DropdownToggle.prototype, "isOpen", null);
    __decorate([
        core_1.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [MouseEvent]), 
        __metadata('design:returntype', void 0)
    ], DropdownToggle.prototype, "toggleDropdown", null);
    DropdownToggle = __decorate([
        core_1.Directive({
            selector: '[dropdownToggle]',
            exportAs: 'bs-dropdown-toggle'
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownToggle);
    return DropdownToggle;
}());
exports.DropdownToggle = DropdownToggle;
//# sourceMappingURL=dropdown.toggle.js.map