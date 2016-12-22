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
var ToKeyValueListPipe = (function () {
    function ToKeyValueListPipe() {
    }
    ToKeyValueListPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value.fields) {
            if (key !== 'primaryId') {
                keys.push({ key: key, value: value.fields[key] });
            }
        }
        return keys;
    };
    ToKeyValueListPipe = __decorate([
        core_1.Pipe({ name: 'keys' }), 
        __metadata('design:paramtypes', [])
    ], ToKeyValueListPipe);
    return ToKeyValueListPipe;
}());
exports.ToKeyValueListPipe = ToKeyValueListPipe;
//# sourceMappingURL=keyValue.pipe.js.map