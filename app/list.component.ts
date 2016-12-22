import { Component, OnInit, Input }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }                   from '@angular/router';
import { Http, Response } from '@angular/http';

import { MenuItemsService } from './menuitems.service';

import { Nav } from './nav';

const NAV: Nav[] = [];

@Component({
    moduleId: module.id,
    selector: 'org-details',
    template:`
    <div class="container">
<h2>Recipients List</h2>
<br>
<table class="table table-striped">
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Select</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let rp of arrAll">   
            <td>{{rp.$id}}</td>             
            <td>{{rp.table}}</td>
            <td>{{rp.phone}}</td>                
            <td>{{rp.isActivated?'Active':'Inactive'}}</td>             
            <td>
                <input id={{rp.$id}}  type="checkbox" [(ngModel)]="rp.selected">
            </td>
        </tr>          
    </tbody>
</table>

<button class="btn btn-success" (click)="newRecipient()">New Recipient</button>
<button class="btn btn-danger pull-right" (click) ="deleteRecipients()">Delete Recipients</button>
    `
})
export class ListComponent {
    public oganizationData : Array<any> = [];
    public errorMessage : any;
    formTemplateUrl = "";
    tableName = "";
    data1 = {};
    object = {};
    @Input() record = {'fields':{}};
    public arrAll: Array<any> = [];

    constructor(
        private http: Http,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
        public _menuItems:MenuItemsService,
    ) {

      this.route.params.subscribe(params => {
        var name;
        var id;
          name = params['name'];
          id = +params['id']; // (+) converts string 'name' to a number
          this.object['name'] = name;
          this.object['id'] = id;
          this.tableName = name;
      });
      if(this.object){
        this._menuItems.getOrganizations(this.tableName)
        .subscribe(
        data => 
        {
          if(data.length > 0){
            this.arrAll = data;
            this.data1 = data[0];
            var jsonObj = data[0].fields;
            //this.dataHead = Object.keys(jsonObj);

          }
          
        },
        error =>  {
          this.errorMessage = <any>error;
        });
      }
        
    }

    newRecipient() {
        this.router.navigate(['../NewRecipient']);
    }

    private getSelected() {
        return this.arrAll.filter((item) => item.selected);
    }

    deleteRecipients() {  //need to know which recipients are checked
        let selected = this.arrAll.filter((x) => x.selected);
    }

    checkbox(recipient) {
        recipient.selected = (recipient.selected) ? false : true;
    }

    componentData = null;
    extraTemplate = ""
        
    ngOnInit(): void {
                
    }

}
