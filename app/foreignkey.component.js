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
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var router_2 = require('@angular/router');
var menuitems_service_1 = require('./menuitems.service');
var key_1 = require('./key');
var ForeignkeyComponent = (function () {
    function ForeignkeyComponent(http, route, location, _menuItems, router) {
        this.http = http;
        this.route = route;
        this.location = location;
        this._menuItems = _menuItems;
        this.router = router;
        this.counterChange = new core_1.EventEmitter();
        this.status = '';
        this.errorMessage = '';
    }
    ForeignkeyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var obj = {};
        obj['tableName'] = this.keydata.tablename;
        obj['columnName'] = this.keydata.columnname;
        obj['id'] = this.keydata.tableid;
        var arr = [];
        var array = [];
        this._menuItems.getForeignKeyElements(obj)
            .subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                for (var key in data[i].fields) {
                    arr.push(data[i].fields[key]);
                }
                array.push(arr.join(" "));
                arr = [];
            }
            //array.push(arr.join(" "));
            if (array.length > 0) {
                _this.counterChange.emit({
                    value: array
                });
            }
            //this.status = this._menuItems.setKeyData(array);
        }, function (error) {
            _this.errorMessage = error;
            console.log(error);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', key_1.Key)
    ], ForeignkeyComponent.prototype, "keydata", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ForeignkeyComponent.prototype, "counterChange", void 0);
    ForeignkeyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'foreignkey-table',
            templateUrl: './foreignkey.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.ActivatedRoute, common_1.Location, menuitems_service_1.MenuItemsService, router_2.Router])
    ], ForeignkeyComponent);
    return ForeignkeyComponent;
}());
exports.ForeignkeyComponent = ForeignkeyComponent;
//# sourceMappingURL=foreignkey.component.js.map