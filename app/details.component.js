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
var DetailsComponent = (function () {
    function DetailsComponent(elementRef, http, route, location, _menuItems, _service, router) {
        var _this = this;
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
        this.status = "";
        this.selectedOpt = '';
        this.isTopic = false;
        this.newTopic = '';
        this.currentTopic = false;
        this.currentTopicComments = '';
        this.currentUser = 'Admin';
        this.isVisible = false;
        this.errorMessage = '';
        this.searchName = '';
        this.taskData = [];
        this.conversationDetails = [];
        this.comments = [];
        this.record = { 'fields': {} };
        //@Input() searchName = "";
        this.filterargs = {};
        this.items = [];
        this.filter = '';
        this.newTask = '';
        this.newComment = '';
        this.newChat = '';
        this.chatUser = '';
        this.isOpenChat = false;
        this.selectedUsers = '';
        this.alerts = [];
        this.dataBody = [];
        this.dataHead = [];
        this.data1 = [];
        this.isDisabled = false;
        this.states = [];
        this.chatArr = [];
        this.myOptions = [];
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            animation: false,
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        this.route.params.subscribe(function (params) {
            _this.tableName = params['name'];
            console.log(_this.route.params);
            _this.getRecord(_this.tableName);
        });
        this.formTemplateUrl = "http://192.168.43.234/CCR/api/DynamicForm/GetFormContentByTableName=" + this.tableName;
        console.log(this.tableName);
        this._menuItems.getOrganizations(this.tableName)
            .subscribe(function (data) {
            var arr1 = [];
            if (data.length > 0) {
                _this.dataBody = data;
                _this.items = data;
                _this.data1 = data[0];
                var jsonObj = data[0].fields;
                var arr = Object.keys(jsonObj);
                _this.filter = 'name';
                for (var i = 0; i < _this.dataBody.length; i++) {
                    for (var key in data[i].fields) {
                        if (key !== 'primaryId') {
                            arr1.push(data[i].fields[key]);
                        }
                    }
                }
                _this.states = arr1;
                var index = arr.indexOf('primaryId');
                arr.splice(index, 1);
                _this.dataHead = arr;
            }
        }, function (error) {
            _this.errorMessage = error;
        });
    }
    DetailsComponent.prototype.ngOnInit = function () {
        this.taskData = [{ task: "Web Design" }, { task: "Slicing" }, { task: "WooCommerce" }, { task: "Programming" }, { task: "SEO Optimize" }];
        this.conversationDetails = [{ 'user': 'Jack Gates', 'desc': 'In it except to so temper mutual tastes mother. Interested cultivated its continuing now yet are. Out interested acceptance our partiality affronting unpleasant why add. Esteem garden me...', 'topic': 'MyTopic', 'comments': [{ 'tComments': 'aaaaaa' }, { 'tComments': 'commentsssss' }] }, { 'user': 'Arlind Nushi', 'desc': 'Age sold some full like rich new. Amounted repeated as believed in confined juvenile.' }, { 'user': 'Bryan Green', 'desc': 'Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.' }];
        //this.route.params.forEach((params: Params) => {
        // this.id = +params['id'];
        //this.getRecord(this.route.params._value.name);
        //});
    };
    DetailsComponent.prototype.chatUsers = function () {
        for (var i = 0; i < this.conversationDetails.length; i++) {
            // myOptions
            var json = {};
            json['chatUser'] = this.conversationDetails[i].user;
            this.myOptions.push(json);
        }
        console.log(this.myOptions);
        this.isVisible = true;
    };
    DetailsComponent.prototype.setSelected = function (selectElement) {
        for (var i = 0; i < selectElement.options.length; i++) {
            var optionElement = selectElement.options[i];
            var optionModel = this.myOptions[i];
            if (optionElement['selected'] == true) {
                optionModel['selected'] = true;
            }
            else {
                optionModel['selected'] = false;
            }
        }
    };
    DetailsComponent.prototype.data = function () {
        //this.selectedUsers = this.myOptions.filter((item) => { return item['selected'] === true; });
        //this.selectedUsers = this.selectedUsers[0].chatUser;
    };
    DetailsComponent.prototype.randomize1 = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    // events
    DetailsComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DetailsComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DetailsComponent.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    };
    DetailsComponent.prototype.getUpdatedRecord = function () {
        return JSON.stringify(this.record);
    };
    DetailsComponent.prototype.searchRecords = function () {
        this.filterargs[this.filter] = this.searchName.toLowerCase();
    };
    DetailsComponent.prototype.myValueChange = function (event) {
        console.log(event);
        this.states = event.value;
    };
    DetailsComponent.prototype.openChat = function (chat) {
        if (this.chatUser !== chat) {
            this.chatUser = chat;
            this.isOpenChat = true;
            this.chatArr = [];
        }
        else {
            this.isOpenChat = true;
        }
    };
    DetailsComponent.prototype.addTopic = function () {
        this.isTopic = true;
    };
    DetailsComponent.prototype.add = function () {
        var arr = {};
        arr['topic'] = this.newTopic;
        arr['user'] = 'Current User Topic';
        this.conversationDetails.push(arr);
        this.newTopic = '';
        this.isTopic = false;
    };
    DetailsComponent.prototype.currentComment = function () {
        this.currentTopic = true;
    };
    DetailsComponent.prototype.addTopicComments = function (item) {
        for (var i = 0; i < this.conversationDetails.length; i++) {
            if (this.conversationDetails[i].user === item.user) {
                var cmnt = {};
                cmnt['tComments'] = this.currentTopicComments;
                if (this.conversationDetails[i]['comments'] !== undefined) {
                    this.conversationDetails[i]['comments'].push(cmnt);
                }
                else {
                    this.comments.push(cmnt);
                    this.conversationDetails[i]['comments'] = this.comments;
                }
            }
        }
        this.currentTopic = false;
        this.currentTopicComments = '';
    };
    DetailsComponent.prototype.cancelTopic = function () {
        this.isTopic = false;
        this.newTopic = '';
    };
    DetailsComponent.prototype.closeChat = function () {
        this.isOpenChat = false;
    };
    DetailsComponent.prototype.typeaheadOnSelect = function (e) {
        console.log('Selected value: ', e.value);
    };
    DetailsComponent.prototype.getRecord = function (tableName) {
        this.formTemplateUrl = "http://192.168.43.234/CCR/api/DynamicForm/GetFormContentByTableName?tableName=" + tableName;
    };
    DetailsComponent.prototype.getSelected = function () {
        return this.dataBody.filter(function (item) { return item.selected; });
    };
    DetailsComponent.prototype.deleteRecord = function () {
        var _this = this;
        //let selected = this.dataBody.filter((x) => x.selected)
        var selected = this.getSelected();
        var _loop_1 = function(i) {
            var obj = {};
            obj['table'] = selected[i].table;
            obj['row'] = +selected[i].fields.primaryId;
            this_1._menuItems.deleteRecords(obj)
                .subscribe(function (data) {
                if (i == (selected.length - 1)) {
                    _this.alerts.push({ msg: 'Successfully deleted records from database!', type: 'success', closable: true });
                    location.reload();
                }
            }, function (error) {
                _this.alerts.push({ msg: 'Failed to delete records from database, please try again!', type: 'danger', closable: true });
                _this.errorMessage = error;
            });
        };
        var this_1 = this;
        for (var i = 0; i < selected.length; i++) {
            _loop_1(i);
        }
    };
    DetailsComponent.prototype.newRecord = function () {
        var link = ['/new', this.tableName];
        this.router.navigate(link);
    };
    DetailsComponent.prototype.updateRecord = function () {
        var selected = this.getSelected();
        if (selected.length === 1) {
            this.isDisabled = false;
            this.status = this._menuItems.setUpdate(selected);
            if (this.status == '200') {
                var link = ['/new', this.tableName];
                this.router.navigate(link);
            }
            else {
                console.log('Error..........');
                this.alerts.push({ msg: 'Failed to update, please select the valid record and try again!', type: 'danger', closable: true });
            }
        }
        else if (selected.length === 0) {
            this.alerts.push({ msg: 'Failed to update, please select any one item from list and try again!', type: 'danger', closable: true });
        }
        else {
            this.isDisabled = true;
            console.log('Error......');
            this.alerts.push({ msg: 'Failed to update, please select only one item from list and try again!', type: 'danger', closable: true });
        }
    };
    DetailsComponent.prototype.addTasks = function () {
        var arr = {};
        arr['task'] = this.newTask;
        this.taskData.push(arr);
        this.newTask = '';
    };
    DetailsComponent.prototype.addComment = function () {
        var arr = {};
        arr['desc'] = this.newComment;
        arr['user'] = this.currentUser;
        this.conversationDetails.push(arr);
        this.newComment = '';
    };
    DetailsComponent.prototype.addChatComment = function () {
        //chatArr
        var chat = {};
        chat['user'] = this.currentUser;
        chat['desc'] = this.newChat;
        this.chatArr.push(chat);
        this.newChat = '';
    };
    DetailsComponent.prototype.removeTasks = function () {
        var selectedTask = this.getSelectedTasks();
        for (var i = 0; i < selectedTask.length; i++) {
            var index = this.taskData.indexOf(selectedTask[i]);
            this.taskData.splice(index, 1);
        }
    };
    DetailsComponent.prototype.getSelectedTasks = function () {
        return this.taskData.filter(function (item) { return item.selected; });
    };
    DetailsComponent.prototype.singleUpdate = function (item) {
        var arr = [];
        arr.push(item);
        this.status = this._menuItems.setUpdate(arr);
        if (this.status == '200') {
            var link = ['/new', this.tableName];
            this.router.navigate(link);
        }
        else {
            console.log('Errooooooro..........');
            this.alerts.push({ msg: 'Failed to update, please select the valid record and try again!', type: 'danger', closable: true });
        }
    };
    DetailsComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    DetailsComponent.prototype.save = function () {
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
    ], DetailsComponent.prototype, "record", void 0);
    DetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-details',
            templateUrl: './listing.html'
        }), 
        __metadata('design:paramtypes', [core_2.ElementRef, http_1.Http, router_1.ActivatedRoute, common_1.Location, menuitems_service_1.MenuItemsService, notifications_service_1.NotificationsService, router_2.Router])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=details.component.js.map