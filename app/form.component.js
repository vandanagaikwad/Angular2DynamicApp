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
var FormComponent = (function () {
    function FormComponent(http, route, location) {
        this.http = http;
        this.route = route;
        this.location = location;
        this.self = this;
        this.formTemplateUrl = "http://ccrws.evello.net/languages.aspx";
        this.table = "";
        this.id = 0;
        this.record = null;
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.table = params['type'];
            _this.id = +params['id'];
            _this.getRecord(_this.table, _this.id);
        });
    };
    FormComponent.prototype.getUpdatedRecord = function () {
        return JSON.stringify(this.record);
    };
    FormComponent.prototype.getRecord = function (type, id) {
        var _this = this;
        this.http.get('http://ccrws.evello.net/api/table/' + type + '/' + id)
            .subscribe(function (res) {
            _this.record = res.json();
        });
    };
    FormComponent.prototype.save = function () {
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
        if (this.id == 0)
            this.http.post('http://ccrws.evello.net/api/table/' + this.table, this.getUpdatedRecord(), headers).subscribe(function (res) { return res.json(); });
        else
            this.http.put('http://ccrws.evello.net/api/table/' + this.table + '/' + this.id, this.getUpdatedRecord(), headers).subscribe(function (res) { return res.json(); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FormComponent.prototype, "record", void 0);
    FormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-form',
            template: "\n<template dynamic-component \n    [componentContext]=\"self\"\n    [componentTemplateUrl]='formTemplateUrl'\n></template>\n"
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.ActivatedRoute, common_1.Location])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map