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

import { DynamicComponentModuleFactory } from "angular2-dynamic-component/index";
import { TypeaheadMatch } from './../node_modules/ng2-bootstrap/components/typeahead/typeahead-match.class';
import { ForeignkeyComponent } from './foreignkey.component';


import { Nav } from './nav';

let html = '';
let innerHtml = '';

@Component({
    moduleId: module.id,
    selector: 'new-details',
    template:`
    <alert *ngFor="let alert of alerts;let i = index" [type]="alert.type" dismissible="true" (close)="closeAlert(i)" dismissOnTimeout="3000" style="display: block;">
      {{ alert?.msg }}
    </alert>
    <template dynamic-component 
        [componentContext]="self"
        [componentTemplateUrl]='formTemplateUrl'
    ></template>
    <div>
    <h4>Static arrays</h4>
      <pre class="card card-block card-header">Model: {{selectedOpt | json}}</pre>
      <input [(ngModel)]="selectedOpt"
             [typeahead]="states"
             class="form-control">
    <foreignkey-table [keydata]="{tablename:'appraisal', columnname:'userid', tableid: 3}" (counterChange)="myValueChange($event);"></foreignkey-table>

    </div>
   
    `
    
})


export class AddComponent implements OnInit {
    
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
    
    errorMessage='';

    @Input() record = {'fields':{}};
    @Input() keydata = {};

    public alerts:Array<Object> = [];
    public dataBody : Array<any> = [];
    public dataHead : Array<any> = [];
    public data1 : Array<any> = [];
    public states:Array<string> = [];
    public searchtext:Array<string> = [];


    constructor( private elementRef: ElementRef,
        private http: Http,
        private route: ActivatedRoute,
        private location: Location,
        public _menuItems:MenuItemsService,
        private _service: NotificationsService,
        private router: Router
    ) {

        this.searchtext = ['aaaaa']
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
        this.tableName = params['name'];
        this.getRecord(this.tableName);
    });

    this.formTemplateUrl = "http://192.168.43.234/CCR/api/DynamicForm/GetFormContentByTableName?tableName="+this.tableName;
    this._menuItems.getOrganizations(this.tableName)
        .subscribe(
        data => 
        {
          if(data.length > 0){
            this.dataBody = data;
            this.data1 = data[0];
            var jsonObj = data[0].fields;
            this.dataHead = Object.keys(jsonObj);

          }
          
        },
        error =>  {
          this.errorMessage = <any>error;
        });

        var d = this._menuItems.getUpdate();
        
        if(d.length > 0){
            this.id = d[0].fields.primaryId;

            var key = "primaryId";
            delete d[0].fields[key];

            this.record['fields'] = d[0].fields;

            
        }
    }

    getUpdatedRecord() {
        return JSON.stringify(this.record);
    }

    myValueChange(event) {
        
        this.states = event.value;
    }

    getRecord(tableName) {

        this.formTemplateUrl = "http://192.168.43.234/CCR/api/DynamicForm/GetFormContentByTableName?tableName="+tableName;
       
        
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
        
        if(this.id == 0){
            obj.Properties['Id'] = 0;
        } else {
            obj.Properties['Id'] = +this.id;
        }
        
        
        this._menuItems.createForms(obj)
          .subscribe(
            data => 
            {
                if(data === 200){
                    this.alerts.push({msg: 'Successfully created form in database!', type: 'success', closable: true});
                    let link = ['/list', this.tableName];
                    this.router.navigate(link);
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
