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
var http_1 = require('@angular/http');
require("rxjs/add/operator/map");
var Rx_1 = require("rxjs/Rx");
var MenuItemsService = (function () {
    function MenuItemsService(http) {
        this.http = http;
        //private menuItems: Array<any> = [];
        this.sharedObj = {};
    }
    MenuItemsService.prototype.getMenus = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get('http://192.168.43.234/CCR/api/DynamicForm/GetDynamicMenu')
            .map(this.extractData)
            .catch(this.handleError);
    };
    MenuItemsService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    MenuItemsService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Rx_1.Observable.throw(errMsg);
    };
    MenuItemsService.prototype.getDynamicForms = function (id) {
        return this.http.get('http://192.168.43.234/CCR/api/DynamicForm/GetFormContent?tableId=' + id)
            .map(this.extractFormData)
            .catch(this.handleError);
    };
    MenuItemsService.prototype.extractFormData = function (res) {
        var body = res.json();
        return body || {};
    };
    MenuItemsService.prototype.getOrganizations = function (name) {
        //return this.http.get('http://ccrws.evello.net/api/table/organisation')
        return this.http.get('http://192.168.43.234/CCR/api/DynamicForm/GetViewData?tableName=' + name)
            .map(this.extractFormData)
            .catch(this.handleError);
    };
    MenuItemsService.prototype.getDetails = function (obj) {
        //return this.http.get('http://ccrws.evello.net/api/table/organisation')
        return this.http.get('http://192.168.43.234/CCR/api/DynamicForm/GetTableData?tableName=' + obj['name'] + '&Id=' + obj['id'])
            .map(this.extractFormData)
            .catch(this.handleError);
    };
    MenuItemsService.prototype.getForeignKeyElements = function (obj) {
        return this.http.get('http://192.168.43.234/CCR/api/DynamicForm/GetForeignKeyTable?tableName=' + obj['tableName'] + '&columnName=' + obj['columnName'] + '&id=' + obj['id'])
            .map(this.extractFormData)
            .catch(this.handleError);
    };
    MenuItemsService.prototype.deleteRecords = function (obj) {
        //return this.http.get('http://ccrws.evello.net/api/table/organisation')
        return this.http.get('http://192.168.43.234/CCR/api/DynamicForm/DeleteTableRecord?tableName=' + obj['table'] + '&Id=' + obj['row'])
            .map(this.extractFormData)
            .catch(this.handleError);
    };
    MenuItemsService.prototype.getFormElements = function (name) {
        return this.http.get('http://192.168.43.234/CCR/api/DynamicForm/GetFormFieldList?tableName=' + name)
            .map(this.extractFormData)
            .catch(this.handleError);
    };
    MenuItemsService.prototype.setUpdate = function (obj) {
        this.sharedObj = obj;
        return '200';
    };
    MenuItemsService.prototype.getUpdate = function () {
        return this.sharedObj;
    };
    MenuItemsService.prototype.createForms = function (formData) {
        var bodyString = JSON.stringify(formData);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('http://192.168.43.234/CCR/api/DynamicForm/AddEditTableRecord', bodyString, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    MenuItemsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MenuItemsService);
    return MenuItemsService;
}());
exports.MenuItemsService = MenuItemsService;
//# sourceMappingURL=menuitems.service.js.map