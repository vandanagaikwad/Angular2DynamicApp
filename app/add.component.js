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
var router_2 = require('@angular/router');
var html = '';
var innerHtml = '';
var AddComponent = (function () {
    function AddComponent(elementRef, http, route, location, _menuItems, _service, router) {
        this.elementRef = elementRef;
        this.http = http;
        this.route = route;
        this.location = location;
        this._menuItems = _menuItems;
        this._service = _service;
        this.router = router;
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
        this.keydata = {};
        this.alerts = [];
        this.dataBody = [];
        this.dataHead = [];
        this.data1 = [];
        this.states = [];
        this.searchtext = [];
        this.searchtext = ['aaaaa'];
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.tableName = params['name'];
            _this.getRecord(_this.tableName);
        });
        this.formTemplateUrl = "http://192.168.43.234/CCR/api/DynamicForm/GetFormContentByTableName?tableName=" + this.tableName;
        this._menuItems.getOrganizations(this.tableName)
            .subscribe(function (data) {
            if (data.length > 0) {
                _this.dataBody = data;
                _this.data1 = data[0];
                var jsonObj = data[0].fields;
                _this.dataHead = Object.keys(jsonObj);
            }
        }, function (error) {
            _this.errorMessage = error;
        });
        var d = this._menuItems.getUpdate();
        if (d.length > 0) {
            this.id = d[0].fields.primaryId;
            var key = "primaryId";
            delete d[0].fields[key];
            this.record['fields'] = d[0].fields;
        }
    };
    AddComponent.prototype.getUpdatedRecord = function () {
        return JSON.stringify(this.record);
    };
    AddComponent.prototype.myValueChange = function (event) {
        this.states = event.value;
    };
    AddComponent.prototype.getRecord = function (tableName) {
        this.formTemplateUrl = "http://192.168.43.234/CCR/api/DynamicForm/GetFormContentByTableName?tableName=" + tableName;
    };
    AddComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    AddComponent.prototype.save = function () {
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
        if (this.id == 0) {
            obj.Properties['Id'] = 0;
        }
        else {
            obj.Properties['Id'] = +this.id;
        }
        this._menuItems.createForms(obj)
            .subscribe(function (data) {
            if (data === 200) {
                _this.alerts.push({ msg: 'Successfully created form in database!', type: 'success', closable: true });
                var link = ['/list', _this.tableName];
                _this.router.navigate(link);
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
    ], AddComponent.prototype, "record", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AddComponent.prototype, "keydata", void 0);
    AddComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'new-details',
            template: "\n    <alert *ngFor=\"let alert of alerts;let i = index\" [type]=\"alert.type\" dismissible=\"true\" (close)=\"closeAlert(i)\" dismissOnTimeout=\"3000\" style=\"display: block;\">\n      {{ alert?.msg }}\n    </alert>\n    <template dynamic-component \n        [componentContext]=\"self\"\n        [componentTemplateUrl]='formTemplateUrl'\n    ></template>\n    <div>\n    <h4>Static arrays</h4>\n      <pre class=\"card card-block card-header\">Model: {{selectedOpt | json}}</pre>\n      <input [(ngModel)]=\"selectedOpt\"\n             [typeahead]=\"states\"\n             class=\"form-control\">\n    <foreignkey-table [keydata]=\"{tablename:'appraisal', columnname:'userid', tableid: 3}\" (counterChange)=\"myValueChange($event);\"></foreignkey-table>\n\n    </div>\n   \n    "
        }), 
        __metadata('design:paramtypes', [core_2.ElementRef, http_1.Http, router_1.ActivatedRoute, common_1.Location, menuitems_service_1.MenuItemsService, notifications_service_1.NotificationsService, router_2.Router])
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
//# sourceMappingURL=add.component.js.map