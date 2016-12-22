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

import { DynamicComponentModuleFactory } from "angular2-dynamic-component/index";

import { Nav } from './nav';

let html = '';
let innerHtml = '';

@Component({
    moduleId: module.id,
    selector: 'org-details',
    template:`
    <template dynamic-component 
        [componentContext]="self"
        [componentTemplateUrl]='formTemplateUrl'
    ></template>
    `
})


export class OrgDetailsComponent implements OnInit {
    
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

    public alerts:Array<Object> = [];

    constructor( private elementRef: ElementRef,
        private http: Http,
        private route: ActivatedRoute,
        private location: Location,
        public _menuItems:MenuItemsService,
        private _service: NotificationsService
    ) { 
     this.formTemplateUrl = "http://192.168.43.234/CCR/api/GetFormContentByTableName?tableName="+this.tableName;
    }

    ngOnInit(): void {
        
        this.route.params.subscribe(params => {
            this.tableName = params['name'];
            
            this.getRecord(this.tableName);
        });
    }

    getUpdatedRecord() {
        return JSON.stringify(this.record);
    }

    getRecord(tableName) {

        this.formTemplateUrl = "http://192.168.43.234/CCR/api/DynamicForm/GetFormContentByTableName?tableName="+tableName;
       
        
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
