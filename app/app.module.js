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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var angular2_notifications_1 = require('angular2-notifications');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
//import { TypeaheadModule } from 'ng2-bootstrap/components/typeahead';
var app_component_1 = require('./app.component');
var nav_component_1 = require('./nav.component');
var list_component_1 = require('./list.component');
var details_component_1 = require('./details.component');
var add_component_1 = require('./add.component');
var upper_nav_component_1 = require('./upper.nav.component');
var form_component_1 = require('./form.component');
var menuitems_service_1 = require('./menuitems.service');
var sanitize_html_pipe_1 = require('./sanitize-html.pipe');
var keyValue_pipe_1 = require('./keyValue.pipe');
var search_pipe_1 = require('./search.pipe');
var notifications_service_1 = require('./notifications.service');
var dropdown_directive_1 = require('./dropdown.directive');
var typeahead_directive_1 = require('./typeahead.directive');
var dropdown_toggle_1 = require('./dropdown.toggle');
var foreignkey_component_1 = require('./foreignkey.component');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
//import { DropdownMultiselectModule } from 'ng2-dropdown-multiselect';
var index_1 = require("angular2-dynamic-component/index");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                angular2_notifications_1.SimpleNotificationsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                ng2_bootstrap_1.Ng2BootstrapModule,
                ng2_bootstrap_1.TypeaheadModule,
                ng2_bootstrap_1.AlertModule,
                ng2_bootstrap_1.DropdownModule,
                ng2_charts_1.ChartsModule,
                // DropdownMultiselectModule,
                index_1.DynamicComponentModuleFactory.buildModule([
                    forms_1.FormsModule
                ]),
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        redirectTo: '/list/user',
                        pathMatch: 'full'
                    },
                    {
                        path: 'list/:name',
                        component: details_component_1.DetailsComponent
                    },
                    {
                        path: 'new/:name',
                        component: add_component_1.AddComponent
                    },
                    {
                        path: 'list/:name/:id',
                        component: list_component_1.ListComponent
                    },
                    {
                        path: 'form/:type/:id',
                        component: form_component_1.FormComponent
                    },
                ])
            ],
            providers: [
                menuitems_service_1.MenuItemsService,
                notifications_service_1.NotificationsService
            ],
            declarations: [app_component_1.AppComponent, nav_component_1.NavComponent, list_component_1.ListComponent, details_component_1.DetailsComponent, add_component_1.AddComponent, upper_nav_component_1.UpperNavComponent, form_component_1.FormComponent, sanitize_html_pipe_1.SanitizeHtml, keyValue_pipe_1.ToKeyValueListPipe, search_pipe_1.SearchFilterPipe, dropdown_directive_1.DropdownDirective, typeahead_directive_1.TypeaheadDirective, dropdown_toggle_1.DropdownToggle, foreignkey_component_1.ForeignkeyComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map