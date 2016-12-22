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
var router_1 = require('@angular/router');
var menuitems_service_1 = require('./menuitems.service');
var NAV = [];
var NavComponent = (function () {
    function NavComponent(router, _menuItems) {
        var _this = this;
        this.router = router;
        this._menuItems = _menuItems;
        this._menuItems.getMenus()
            .subscribe(function (data) {
            _this.navmenu = data.menuList;
        }, function (error) {
            _this.errorMessage = error;
        });
    }
    NavComponent.prototype.gotoList = function (nav) {
        var link = ['/list', nav.name];
        this.router.navigate(link);
    };
    NavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-nav',
            templateUrl: './nav.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, menuitems_service_1.MenuItemsService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map