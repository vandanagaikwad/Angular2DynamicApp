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
var SearchFilterPipe = (function () {
    function SearchFilterPipe() {
    }
    SearchFilterPipe.prototype.transform = function (items, args) {
        // filter items array, items which match and return true will be kept, false will be filtered out
        if (Object.keys(args).length !== 0) {
            var itemArr = [];
            items.filter(function (item) {
                var arr = Object.keys(item.fields);
                var index = arr.indexOf('primaryId');
                arr.splice(index, 1);
                for (var i = 0; i < arr.length; i++) {
                    if (item.fields[arr[i]].toLowerCase().indexOf(args['name']) !== -1) {
                        itemArr.push(item);
                        break;
                    }
                }
                //item.fields.name.indexOf(args.name) !== -1;
            });
            return itemArr;
        }
        else {
            return items;
        }
    };
    SearchFilterPipe = __decorate([
        core_1.Pipe({
            name: 'searchfilter',
            pure: false
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SearchFilterPipe);
    return SearchFilterPipe;
}());
exports.SearchFilterPipe = SearchFilterPipe;
//# sourceMappingURL=search.pipe.js.map