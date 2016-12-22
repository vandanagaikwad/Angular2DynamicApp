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
var router_2 = require('@angular/router');
var http_1 = require('@angular/http');
var menuitems_service_1 = require('./menuitems.service');
var NAV = [];
var ListComponent = (function () {
    function ListComponent(http, route, location, router, _menuItems) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.location = location;
        this.router = router;
        this._menuItems = _menuItems;
        this.oganizationData = [];
        this.formTemplateUrl = "";
        this.tableName = "";
        this.data1 = {};
        this.object = {};
        this.record = { 'fields': {} };
        this.arrAll = [];
        this.componentData = null;
        this.extraTemplate = "";
        this.route.params.subscribe(function (params) {
            var name;
            var id;
            name = params['name'];
            id = +params['id']; // (+) converts string 'name' to a number
            _this.object['name'] = name;
            _this.object['id'] = id;
            _this.tableName = name;
        });
        if (this.object) {
            this._menuItems.getOrganizations(this.tableName)
                .subscribe(function (data) {
                if (data.length > 0) {
                    _this.arrAll = data;
                    _this.data1 = data[0];
                    var jsonObj = data[0].fields;
                }
            }, function (error) {
                _this.errorMessage = error;
            });
        }
    }
    ListComponent.prototype.newRecipient = function () {
        this.router.navigate(['../NewRecipient']);
    };
    ListComponent.prototype.getSelected = function () {
        return this.arrAll.filter(function (item) { return item.selected; });
    };
    ListComponent.prototype.deleteRecipients = function () {
        var selected = this.arrAll.filter(function (x) { return x.selected; });
    };
    ListComponent.prototype.checkbox = function (recipient) {
        recipient.selected = (recipient.selected) ? false : true;
    };
    ListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ListComponent.prototype, "record", void 0);
    ListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'org-details',
            template: "\n    <div class=\"container\">\n<h2>Recipients List</h2>\n<br>\n<table class=\"table table-striped\">\n    <thead>\n        <tr>\n            <th>Id</th>\n            <th>Name</th>\n            <th>Phone</th>\n            <th>Status</th>\n            <th>Select</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let rp of arrAll\">   \n            <td>{{rp.$id}}</td>             \n            <td>{{rp.table}}</td>\n            <td>{{rp.phone}}</td>                \n            <td>{{rp.isActivated?'Active':'Inactive'}}</td>             \n            <td>\n                <input id={{rp.$id}}  type=\"checkbox\" [(ngModel)]=\"rp.selected\">\n            </td>\n        </tr>          \n    </tbody>\n</table>\n\n<button class=\"btn btn-success\" (click)=\"newRecipient()\">New Recipient</button>\n<button class=\"btn btn-danger pull-right\" (click) =\"deleteRecipients()\">Delete Recipients</button>\n    "
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.ActivatedRoute, common_1.Location, router_2.Router, menuitems_service_1.MenuItemsService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map