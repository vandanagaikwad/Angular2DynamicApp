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
var core_2 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var menuitems_service_1 = require('./menuitems.service');
var notifications_service_1 = require('./notifications.service');
var html = '';
var innerHtml = '';
var OrgDetailsComponent = (function () {
    function OrgDetailsComponent(elementRef, http, route, location, _menuItems, _service) {
        this.elementRef = elementRef;
        this.http = http;
        this.route = route;
        this.location = location;
        this._menuItems = _menuItems;
        this._service = _service;
        this.self = this;
        this.table = "";
        this.id = 0;
        this.tableName = "";
        this.d = {};
        this.formTemplateUrl = "";
        this.json = {};
        this.elements = [];
        this.state = false;
        this.saveSuccess = false;
        this.errorMessage = '';
        this.record = { 'fields': {} };
        this.alerts = [];
        this.formTemplateUrl = "http://192.168.43.234/CCR/api/GetFormContentByTableName?tableName=" + this.tableName;
    }
    OrgDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.tableName = params['name'];
            _this.getRecord(_this.tableName);
        });
    };
    OrgDetailsComponent.prototype.getUpdatedRecord = function () {
        return JSON.stringify(this.record);
    };
    OrgDetailsComponent.prototype.getRecord = function (tableName) {
        this.formTemplateUrl = "http://192.168.43.234/CCR/api/DynamicForm/GetFormContentByTableName?tableName=" + tableName;
    };
    OrgDetailsComponent.prototype.save = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append("Content-Type", 'application/json');
        /*
        var requestoptions = new requestoptions({
            method: RequestMethod.Post,
            url: this.apiURL + url,
            headers: headers,
            body: data
        })
        */
        var obj = { 'Properties': {}, 'TableName': '' };
        obj.Properties = {};
        obj.TableName = this.tableName;
        obj.Properties = this.record.fields;
        obj.Properties['Id'] = 0;
        this._menuItems.createForms(obj)
            .subscribe(function (data) {
            if (data === 200) {
                _this.alerts.push({ msg: 'Successfully created form in database!', type: 'success', closable: true });
            }
        }, function (error) {
            _this.alerts.push({ msg: 'Failed to create form in database, please try again!', type: 'danger', closable: true });
            _this.errorMessage = error;
        });
        //if (this.id == 0)
        //    this.http.post('http://ccrws.evello.net/api/table/' + this.table, this.getUpdatedRecord(), headers).subscribe((res: Response) => res.json());
        // else
        //    this.http.put('http://ccrws.evello.net/api/table/' + this.table + '/' + this.id, this.getUpdatedRecord(), headers).subscribe((res: Response) => res.json());
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OrgDetailsComponent.prototype, "record", void 0);
    OrgDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'org-details',
            template: "\n    <template dynamic-component \n        [componentContext]=\"self\"\n        [componentTemplateUrl]='formTemplateUrl'\n    ></template>\n    "
        }), 
        __metadata('design:paramtypes', [core_2.ElementRef, http_1.Http, router_1.ActivatedRoute, common_1.Location, menuitems_service_1.MenuItemsService, notifications_service_1.NotificationsService])
    ], OrgDetailsComponent);
    return OrgDetailsComponent;
}());
exports.OrgDetailsComponent = OrgDetailsComponent;
//# sourceMappingURL=org.details.component.js.map