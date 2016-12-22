import { Component, Input, OnInit } from '@angular/core';
import { ElementRef} from '@angular/core';
import {ComponentRef, ViewContainerRef} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { Headers, Http, Response } from '@angular/http';
import { MenuItemsService } from './menuitems.service';
import { NotificationsService } from './notifications.service';
import { ToKeyValueListPipe } from './keyValue.pipe';
import { Router }   from '@angular/router';

import { TypeaheadMatch } from './../node_modules/ng2-bootstrap/components/typeahead/typeahead-match.class';

import { DynamicComponentModuleFactory } from "angular2-dynamic-component/index";

import { Nav } from './nav';

let html = '';
let innerHtml = '';

@Component({
    moduleId: module.id,
    selector: 'my-details',
    templateUrl: './listing.html'
    
})


export class DetailsComponent implements OnInit {
    
    self = this;
    table = "";
    id = 0;
    tableName = "";
    d = {};
    formTemplateUrl = "";
    json = {};
    elements = [];
    state = false;
    saveSuccess = false;
    status = "";
    selectedOpt = '';
    isTopic = false;
    newTopic = '';
    currentTopic = false;
    currentTopicComments = '';
    currentUser = 'Admin';
    isVisible = false;
    
    errorMessage='';
    searchName='';
    taskData = [];
    conversationDetails = [];
    comments = [];
    

    @Input() record = {'fields':{}};
    
    //@Input() searchName = "";

    filterargs = {};
    items = [];
    filter = '';
    newTask = '';
    newComment = '';
    newChat = '';
    chatUser = '';
    isOpenChat = false;
    selectedUsers = '';
    
    public alerts:Array<Object> = [];
    public dataBody : Array<any> = [];
    public dataHead : Array<any> = [];
    public data1 : Array<any> = [];
    public isDisabled : any = false;

    public states:Array<string> = [];
    public chatArr:Array<any> = [];

    myOptions = [];

    constructor( private elementRef: ElementRef,
        private http: Http,
        private route: ActivatedRoute,
        private location: Location,
        public _menuItems:MenuItemsService,
        private _service: NotificationsService,
        private router: Router
    ) { 

    this.route.params.subscribe(params => {
        this.tableName = params['name'];
        console.log(this.route.params);
        this.getRecord(this.tableName);
    });

     this.formTemplateUrl = "http://192.168.43.234/CCR/api/DynamicForm/GetFormContentByTableName="+this.tableName;
     console.log(this.tableName);
     this._menuItems.getOrganizations(this.tableName)
        .subscribe(
        data => 
        {
           var arr1 = [];
          if(data.length > 0){
            this.dataBody = data;
            
            this.items = data;
            this.data1 = data[0];
            var jsonObj = data[0].fields;
            var arr = Object.keys(jsonObj);
            this.filter = 'name';
            for(let i=0; i<this.dataBody.length; i++) {

                for (let key in data[i].fields) {
                  if(key !== 'primaryId'){
                    arr1.push(data[i].fields[key]);
                  }
                  
                }
                
              }
              this.states = arr1;

            var index = arr.indexOf('primaryId');
            arr.splice(index, 1);

            this.dataHead = arr;
          }
          
        },
        error =>  {
          this.errorMessage = <any>error;
        });

    }

    ngOnInit(): void {
        this.taskData = [{task:"Web Design"}, {task:"Slicing"}, {task:"WooCommerce"}, {task:"Programming"}, {task:"SEO Optimize"}];

        this.conversationDetails = [{'user':'Jack Gates', 'desc':'In it except to so temper mutual tastes mother. Interested cultivated its continuing now yet are. Out interested acceptance our partiality affronting unpleasant why add. Esteem garden me...', 'topic': 'MyTopic', 'comments':[{'tComments':'aaaaaa'}, {'tComments':'commentsssss'}]}, {'user':'Arlind Nushi', 'desc':'Age sold some full like rich new. Amounted repeated as believed in confined juvenile.'}, {'user':'Bryan Green', 'desc':'Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.'}];
        

        //this.route.params.forEach((params: Params) => {
           // this.id = +params['id'];
            //this.getRecord(this.route.params._value.name);
        //});
        
    }

    chatUsers() {
        for(let i=0; i<this.conversationDetails.length; i++) {
           // myOptions
           var json = {};
           json['chatUser'] = this.conversationDetails[i].user
           this.myOptions.push(json);
        }
        console.log(this.myOptions);

        this.isVisible = true;
    }

    setSelected(selectElement) {
        for (var i = 0; i < selectElement.options.length; i++) {
            var optionElement = selectElement.options[i];
            var optionModel = this.myOptions[i];

            if (optionElement['selected'] == true) { optionModel['selected'] = true; }
            else { optionModel['selected'] = false; }
        }
    }

    data() {
        //this.selectedUsers = this.myOptions.filter((item) => { return item['selected'] === true; });
        //this.selectedUsers = this.selectedUsers[0].chatUser;
    }



    // lineChart
      public lineChartData:Array<any> = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
        {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
      ];
      public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      public lineChartOptions:any = {
        animation: false,
        responsive: true
      };
      public lineChartColors:Array<any> = [
        { // grey
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
          backgroundColor: 'rgba(77,83,96,0.2)',
          borderColor: 'rgba(77,83,96,1)',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
      ];
      public lineChartLegend:boolean = true;
      public lineChartType:string = 'line';

      public randomize1():void {
        let _lineChartData:Array<any> = new Array(this.lineChartData.length);
        for (let i = 0; i < this.lineChartData.length; i++) {
          _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
          for (let j = 0; j < this.lineChartData[i].data.length; j++) {
            _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
          }
        }
        this.lineChartData = _lineChartData;
      }

      // events
      public chartClicked(e:any):void {
        console.log(e);
      }

      public chartHovered(e:any):void {
        console.log(e);
      }


      public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true
      };
      public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
      public barChartType:string = 'bar';
      public barChartLegend:boolean = true;

      public barChartData:any[] = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
      ];

      public randomize():void {
        // Only Change 3 values
        let data = [
          Math.round(Math.random() * 100),
          59,
          80,
          (Math.random() * 100),
          56,
          (Math.random() * 100),
          40];
        let clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
      }

    getUpdatedRecord() {
        return JSON.stringify(this.record);
    }
    searchRecords() {
        this.filterargs[this.filter] = this.searchName.toLowerCase();

    }
    myValueChange(event) {
        console.log(event);
        this.states = event.value;
        
    }

    openChat(chat) {
        if(this.chatUser !== chat) {
            this.chatUser = chat;
            this.isOpenChat = true;
            this.chatArr = [];
        } else {
            this.isOpenChat = true;
        }
        
    }

    addTopic() {
        this.isTopic = true;
    }

    add() {
        let arr = {};
        arr['topic'] = this.newTopic;
        arr['user'] = 'Current User Topic';
        this.conversationDetails.push(arr);
        this.newTopic = '';
        this.isTopic = false;
    }

    currentComment() {
        this.currentTopic = true;
    }

    addTopicComments(item) {
        for(let i=0; i<this.conversationDetails.length; i++) {
            if(this.conversationDetails[i].user === item.user) {
                var cmnt = {};

                cmnt['tComments'] = this.currentTopicComments;
                
                if(this.conversationDetails[i]['comments'] !== undefined) {
                
                    this.conversationDetails[i]['comments'].push(cmnt);
                } else {
                    this.comments.push(cmnt);
                    this.conversationDetails[i]['comments'] = this.comments;
                }
                
            }
        }
        this.currentTopic = false;
        this.currentTopicComments = '';
    }

    cancelTopic() {
        this.isTopic = false;
        this.newTopic = '';
    }


    closeChat() {
        this.isOpenChat = false;
    }

    typeaheadOnSelect(e:TypeaheadMatch): void {
        console.log('Selected value: ', e.value);
    }

    getRecord(tableName) {

        this.formTemplateUrl = "http://192.168.43.234/CCR/api/DynamicForm/GetFormContentByTableName?tableName="+tableName;
       
        
    }

    private getSelected() {
        return this.dataBody.filter((item) => item.selected);
    }

    deleteRecord() {  //need to know which recipients are checked
        //let selected = this.dataBody.filter((x) => x.selected)
        let selected = this.getSelected()
        
        for( let i=0; i<selected.length; i++){
            let obj = {};
            obj['table'] = selected[i].table;
            obj['row'] = +selected[i].fields.primaryId;
            
            this._menuItems.deleteRecords(obj)
            .subscribe(
            data => 
            {
            
            if(i == (selected.length-1)){
                this.alerts.push({msg: 'Successfully deleted records from database!', type: 'success', closable: true});
                location.reload();
            }
              
              
            },
            error =>  {
                this.alerts.push({msg: 'Failed to delete records from database, please try again!', type: 'danger', closable: true});
                this.errorMessage = <any>error;
            });

        }
    }

    newRecord() {
        let link = ['/new', this.tableName];
        this.router.navigate(link);
    }

    updateRecord() {  
        let selected = this.getSelected()
        
        if(selected.length === 1){
            this.isDisabled = false;
            

            this.status = this._menuItems.setUpdate(selected);
            if(this.status == '200'){
              let link = ['/new', this.tableName];
              this.router.navigate(link);
            } else {
                console.log('Error..........');
                this.alerts.push({msg: 'Failed to update, please select the valid record and try again!', type: 'danger', closable: true});
            }

        } else if(selected.length === 0){
            this.alerts.push({msg: 'Failed to update, please select any one item from list and try again!', type: 'danger', closable: true});
        } else {
            this.isDisabled = true;
            console.log('Error......');
            this.alerts.push({msg: 'Failed to update, please select only one item from list and try again!', type: 'danger', closable: true});
        }
        
    }

    addTasks() {
        
        let arr = {};
        arr['task'] = this.newTask;
        this.taskData.push(arr);
        
        this.newTask = '';

    }

    addComment() {
        
        let arr = {};
        arr['desc'] = this.newComment;
        arr['user'] = this.currentUser;
        this.conversationDetails.push(arr);
        
        this.newComment = '';

    }

    addChatComment() {
        //chatArr
        let chat = {};
        chat['user'] = this.currentUser;
        chat['desc'] = this.newChat;
        this.chatArr.push(chat);
        this.newChat = '';
    }

    removeTasks() {
        let selectedTask = this.getSelectedTasks();
        
        for(var i=0; i<selectedTask.length; i++) {
            var index = this.taskData.indexOf(selectedTask[i]);
            this.taskData.splice(index, 1); 
        }
        
    }

    private getSelectedTasks() {
        return this.taskData.filter((item) => item.selected);
    }

    singleUpdate(item:any) {
        var arr = [];
        arr.push(item);
        
        this.status = this._menuItems.setUpdate(arr);
        if(this.status == '200'){
          let link = ['/new', this.tableName];
          this.router.navigate(link);
        } else {
            console.log('Errooooooro..........');
            this.alerts.push({msg: 'Failed to update, please select the valid record and try again!', type: 'danger', closable: true});
        }
    }

    closeAlert(i:number):void {
        this.alerts.splice(i, 1);
    }

    save() {
        var headers = new Headers();
        headers.append("Content-Type", 'application/json');

        /*
        var requestoptions = new requestoptions({
            method: RequestMethod.Post,
            url: this.apiURL + url,
            headers: headers,
            body: data
        })
        */
        var obj = {'Properties':{},'TableName':''};
        obj.Properties = {};
        obj.TableName = this.tableName;
        
        obj.Properties = this.record.fields;
        obj.Properties['Id'] = 0;
        

        this._menuItems.createForms(obj)
          .subscribe(
            data => 
            {
                if(data === 200){
                    this.alerts.push({msg: 'Successfully created form in database!', type: 'success', closable: true});
                }
              
            },
            error =>  {
                this.alerts.push({msg: 'Failed to create form in database, please try again!', type: 'danger', closable: true});
                this.errorMessage = <any>error;
            });

        //if (this.id == 0)
        //    this.http.post('http://ccrws.evello.net/api/table/' + this.table, this.getUpdatedRecord(), headers).subscribe((res: Response) => res.json());
       // else
        //    this.http.put('http://ccrws.evello.net/api/table/' + this.table + '/' + this.id, this.getUpdatedRecord(), headers).subscribe((res: Response) => res.json());
    }

}
